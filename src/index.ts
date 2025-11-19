import express from 'express';
import { userRoutes } from './route/usuario_routes';
import { admRoutes } from './route/adm_routes';

const app = express();

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index', { message: 'Hello' });
});

app.use(userRoutes);
app.use(admRoutes);

app.listen(3333, () => {
    console.log('Servidor rodando no endereço http://localhost:3333');
});