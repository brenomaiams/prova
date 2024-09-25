import { User } from '../models/user';

export class Logger {
  static logLogin(user: User): void {
    console.log(`Usuário ${user.email} (${user.role}) autenticado em ${new Date()}`);
  }

  static logFailedAttempt(user: User): void {
    console.log(`Falha na tentativa de login de ${user.email} em ${new Date()}`);
  }

  static logBlock(user: User): void {
    console.log(`Usuário ${user.email} foi bloqueado em ${new Date()}`);
  }
}
