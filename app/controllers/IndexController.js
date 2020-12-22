class IndexController {
  async index(req, res) {
    return res.render("index.html");
  }
}

export default new IndexController();