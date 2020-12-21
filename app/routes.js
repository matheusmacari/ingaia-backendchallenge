import { Router } from "express";
import ValorMetroController from "./controllers/ValorMetroController.js";
import ValorImovelController from "./controllers/ValorImovelController.js";

const routes = new Router();

routes.get("/api1", ValorMetroController.CustoMetroQuadrado);
routes.get("/api2/:tamanho", ValorImovelController.ValorTotalImovel);

export default routes;