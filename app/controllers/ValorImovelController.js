import Api from "../api/api.js";

class ValorImovelController {
  async ValorTotalImovel(req, res) {
    const tamanhoImovel = req.params.tamanho;
    
    if (!tamanhoImovel || tamanhoImovel < 10 || tamanhoImovel > 10000){
      return res.status(500).json({error: "Tamanho do imóvel inválido, deve estar entre 10 e 10.000m²"});
    }
    
    var valorM2 = await Api.GetValorMetroQuadrado();
    
    if (!valorM2 || valorM2 < 0) {
      return res.status(500).json({ error: "Valor do m² inválido, deve ser maior que zero" });
    }
    
    return res.json({"valorTotalImovel": valorM2 * tamanhoImovel});
  }
}

export default new ValorImovelController();