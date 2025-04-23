import { Router } from "express";
import { criar, listar } from "../controllers/contatoController";
import { verificarCampo } from "../middlewares/Contato/verificarCampo";

const routerContato = Router();

routerContato.post("/criar-contato", verificarCampo, criar);
routerContato.get("/listar-contatos", listar);

export default routerContato;