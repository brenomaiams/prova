import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      await AuthService.login(email, password);
      return res.status(200).json({ message: 'Login realizado com sucesso' });
    } catch (error) {
      // Verifica se o erro é uma instância de Error
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: 'Erro desconhecido' });
      }
    }
  }
}
