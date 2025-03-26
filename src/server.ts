import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/hello", (requisicao: Request, response: Response) => {
    response.status(200).json("hello world!");
    return;
});

const porta = 8080;

app.listen(porta, () => {
    console.log(`Servidor rodanddo na porta ${porta}!`);
});

// Contato {
//     id, 
//     nome,
//     numero, 
//     email
// }