import { UserRepository } from '../repositories/UserRepository';
import { Encryptor } from '../shared/Encryptor';
import { Logger } from '../shared/Logger';
import { User } from '../models/user';

export class AuthService {
  static async login(email: string, password: string): Promise<void> {
    const user = UserRepository.findByEmail(email);

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    if (user.isBlocked) {
      throw new Error('Usuário bloqueado.');
    }

    const isPasswordValid = await Encryptor.compare(password, user.password);
    if (!isPasswordValid) {
      Logger.logFailedAttempt(user);
      throw new Error('Credenciais inválidas.');
    }

    Logger.logLogin(user);
    // Retorna token ou outras informações conforme o sistema
  }

  static blockUser(user: User): void {
    user.isBlocked = true;
    UserRepository.update(user);
    Logger.logBlock(user);
  }
}
