class IndexController {
  async index(req, res) {
    return res.send("Bem vindo a API!");
  }
}

export default new IndexController();