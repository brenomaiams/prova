var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AuthService } from '../services/AuthService';
export class AuthController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                yield AuthService.login(email, password);
                return res.status(200).json({ message: 'Login realizado com sucesso' });
            }
            catch (error) {
                // Verifica se o erro é uma instância de Error
                if (error instanceof Error) {
                    return res.status(400).json({ message: error.message });
                }
                else {
                    return res.status(400).json({ message: 'Erro desconhecido' });
                }
            }
        });
    }
}
