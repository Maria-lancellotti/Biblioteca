import {Request, Response} from "express";
import { Usuario, inserirEmail, inserir, inserirEmailAndSenha } from "../model/usuario";


export function show_login (req: Request, res: Response) {
    res.render('login', {
        message: null
    });
}


export function show_lista (req: Request, res: Response) {
    res.render('listar_usuario');
}


export async function registrar(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    if(!nome || !email || !senha) {
        return res.render('login', {
            message: {
                type: 'error',
                value: 'Preencha corretamente os dados!',
                title: 'Dados inválidos'
            }
        });
    }

    const userFounded = await inserirEmail(email);
    
    if (userFounded) {
        return res.render('login', {
            message: {
                type: 'error',
                value: 'E-mail já existe',
                title: 'Dados inválidos'
            }
        });  
    }

    const user: Usuario = {
        nome,
        email,
        senha
    };

    await inserir(user);

    res.render('login', {
        message: {
            type: 'success',
            value: 'Usuário cadastrado com sucesso',
            title: 'Sucesso'
        }
    });
}   

export async function  login(req: Request, res: Response) {
    const { email, senha } = req.body;

    if( !email || !senha) {
        return res.render('login', {
            message: {
                type: 'error',
                value: 'Preencha todos os campos corretamente!',
                title: 'Dados inválidos'
            }
        });
    }

    const usuario = await inserirEmailAndSenha(email, senha);

    if( !usuario) {
        return res.render('login', {
            message: {
                type: 'error',
                value: 'Email ou senha incorretos',
                title: 'Dados inválidos'
            }
        });
    }

    return res.redirect('/adm');
}
