import { Router } from 'express';
import { show_adm } from '../controller/adm_controller';

const admRoutes = Router();

admRoutes.get('/adm', show_adm);

export {
    admRoutes
}