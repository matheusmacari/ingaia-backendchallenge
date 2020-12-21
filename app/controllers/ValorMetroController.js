import ValorMetroQuadrado from "../models/ValorMetroQuadrado.js"

class ValorMetroController {
  async CustoMetroQuadrado(req, res) {
    return res.status(200).json({"valorMetroQuadrado":ValorMetroQuadrado.GetValorMetroQuadrado()});
  }
}

export default new ValorMetroController();