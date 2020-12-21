import { Router } from "express";
import ValorMetroController from "./controllers/ValorMetroController.js";
import ValorImovelController from "./controllers/ValorImovelController.js";
import IndexController from "./controllers/IndexController.js";

const routes = new Router();

routes.get('/', IndexController.index);
routes.get("/api1", ValorMetroController.CustoMetroQuadrado);
routes.get("/api2/:tamanho", ValorImovelController.ValorTotalImovel);

export default routes;