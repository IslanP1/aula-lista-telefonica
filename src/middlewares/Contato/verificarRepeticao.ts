import { Response, Request, NextFunction } from "express";

export const verificarRepeticao = async (requisicao: Request, response: Response, next: NextFunction) => {
    const { email, numero } = requisicao.body;


}