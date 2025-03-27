import { criarContato, listarContatos, listarContatoPorId, atualizarContato, atualizarContatoNumero, apagarContato } from "../services/contatoService";
import { Request, Response } from "express";

export const criar = async (requisicao: Request, response: Response) => {
    const contato = await criarContato(requisicao.body);
    if (contato) {
        response.status(201).json({ sucess: "Contato criado com sucesso!" });
        return;
    }
    response.status(500).json({ error: "Não foi possível criar o contato!" })
    return;
}

export const listar = async (requisicao: Request, response: Response) => {
    const contatos = await listarContatos();
    if (contatos) {
        response.status(200).json(contatos);
        return;
    }
    response.status(404).json({error: "Nenhum contato"});
    return;
}