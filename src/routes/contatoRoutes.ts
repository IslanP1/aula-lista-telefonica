import { Router } from "express";
import { criar } from "../controllers/contatoController";

const routerContato = Router();

routerContato.post("/criar-contato", criar);

export default routerContato;