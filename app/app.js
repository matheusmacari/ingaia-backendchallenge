import express from "express";
import routes from "./routes.js";

class App {
  constructor() {
    this.server = express();
    this.server.use(express.static("./"));
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;
