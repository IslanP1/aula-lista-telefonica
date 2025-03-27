import express from "express";
import routerContato from "./routes/contatoRoutes";

const app = express();
app.use(express.json());

app.use("/api", routerContato);

// http://localhost:8080/api/

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