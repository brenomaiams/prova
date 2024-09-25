import { Router } from 'express';
import { AuthController } from '../controllers/AuthControllers';

const router = Router();

router.post('/login', AuthController.login);

export default router;
