import { Router } from 'express';
import { registrar, show_lista, show_login } from '../controller/usuario_controller';

const userRoutes = Router();

userRoutes.get('/user/login', show_login);
userRoutes.get('/user/list', show_lista);
userRoutes.post('/user/register', registrar);

export {
    userRoutes
}