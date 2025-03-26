import { Contato } from "../models/Contato";
import { prisma } from "../config/prisma";

export const criarContato = async (data: Contato) => {
    try {
        return await prisma.contato.create({
            data: {
                nome: data.nome,
                numero: data.numero,
                email: data.email
            }
        });
    } catch (error) {
        console.log(error);
        return null;
    }
} 

export const listarContatos = async () => {
    try {
       return await prisma.contato.findMany();
    } catch (error) {
        console.log(error);
        return null;
    }
}