export class Logger {
    static logLogin(user) {
        console.log(`Usuário ${user.email} (${user.role}) autenticado em ${new Date()}`);
    }
    static logFailedAttempt(user) {
        console.log(`Falha na tentativa de login de ${user.email} em ${new Date()}`);
    }
    static logBlock(user) {
        console.log(`Usuário ${user.email} foi bloqueado em ${new Date()}`);
    }
}
