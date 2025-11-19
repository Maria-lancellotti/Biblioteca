import { UserRole } from "../enums/usuario_role";
import { connection } from "../infra/connection";

export type Usuario = {
    id?: number;
    nome: string;
    email: string;
    senha: string; 
    data_criacao?: string;
}

export async function inserir(usuario:Usuario) {
    await connection.query('INSERT INTO usuario(nome, email, senha) VALUES ($1, $2, $3);',
    [
        usuario.nome,
        usuario.email,
        usuario.senha
    ]);
}

export async function buscar() {
    const {rows} = await connection.query ('SELECT * FROM usuario;');
    return rows;
}

export async function atualizar(usuario:Usuario) {
    await connection.query('UPDATE usuario SET nome=$1, email=$2, senha=$3 WHERE id=$4;',
    [
        usuario.nome,
        usuario.email,
        usuario.senha,
        usuario.id
    ]);
}

export async function inserirEmail(email:string) {
    const {rows} = await connection.query ('SELECT * FROM usuario WHERE email=$1;',
    [email]);
    return rows[0];
}    

export async function inserirEmailAndSenha(email : string, senha : string) {
    const { rows } = await connection.query  (
        'SELECT * FROM usuario WHERE email=$1 AND password=$2',
        [email, senha]
    );
    return rows [0];
}