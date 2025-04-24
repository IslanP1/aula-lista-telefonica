import { Response, Request, NextFunction } from "express";
import { buscarNumeroEEmail } from "../../services/contatoService";

export const verificarRepeticao = async (requisicao: Request, response: Response, next: NextFunction) => {
    const { numero, email } = requisicao.body;
    const contatoExistente = await buscarNumeroEEmail(numero, email);
    if (contatoExistente != null) {
        response.status(400).json({error: "Já existe um contato com este email e número"});
        return;
    }
    next();
}