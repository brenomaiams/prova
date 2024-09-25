export type UserRole = 'cliente' | 'operador' | 'administrador';

export interface User {
  id: string;
  email: string;
  password: string;  // Senha será criptografada
  role: UserRole;
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
