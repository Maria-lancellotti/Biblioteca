import { Router } from 'express';
import { login, registrar, show_lista, show_login } from '../controller/usuario_controller';

const userRoutes = Router();

userRoutes.get('/user/login', show_login);
userRoutes.get('/user/list', show_lista);
userRoutes.post('/usuario/registrar', registrar);

userRoutes.post('/usuario/login', login);

export {
    userRoutes
}