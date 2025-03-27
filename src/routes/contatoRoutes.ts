import { Router } from "express";
import { criar, listar } from "../controllers/contatoController";

const routerContato = Router();

routerContato.post("/criar-contato", criar);
routerContato.get("/listar-contatos", listar);

export default routerContato;