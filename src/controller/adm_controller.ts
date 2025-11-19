import { Request, Response } from "express";

export function show_adm(req: Request, res: Response) {
    res.render('adm');
}