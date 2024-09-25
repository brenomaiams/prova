var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserRepository } from '../repositories/UserRepository';
import { Encryptor } from '../shared/Encryptor';
import { Logger } from '../shared/Logger';
export class AuthService {
    static login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = UserRepository.findByEmail(email);
            if (!user) {
                throw new Error('Usuário não encontrado.');
            }
            if (user.isBlocked) {
                throw new Error('Usuário bloqueado.');
            }
            const isPasswordValid = yield Encryptor.compare(password, user.password);
            if (!isPasswordValid) {
                Logger.logFailedAttempt(user);
                throw new Error('Credenciais inválidas.');
            }
            Logger.logLogin(user);
            // Retorna token ou outras informações conforme o sistema
        });
    }
    static blockUser(user) {
        user.isBlocked = true;
        UserRepository.update(user);
        Logger.logBlock(user);
    }
}
