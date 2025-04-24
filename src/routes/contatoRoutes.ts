import { Router } from "express";
import { criar, listar } from "../controllers/contatoController";
import { verificarCampo } from "../middlewares/Contato/verificarCampo";
import { verificarRepeticao } from "../middlewares/Contato/verificarRepeticao";

const routerContato = Router();

routerContato.post("/criar-contato", verificarCampo, verificarRepeticao, criar);
routerContato.get("/listar-contatos", listar);

export default routerContato;