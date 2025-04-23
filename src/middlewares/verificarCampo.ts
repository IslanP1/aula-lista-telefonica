import { Request, Response, NextFunction } from "express";

//qual o nosso problema?

//Posso salvar no banco tendo informações vazias

export const verificarCampo = async (requisicao: Request, response: Response, next: NextFunction) => {
    const { nome, email, numero } = requisicao.body;
    if (nome == "" || email == "" || numero == "") {
        response.status(400).json({atencao: "Preencha todos os campos!"});
        return;
    }
    next();
}