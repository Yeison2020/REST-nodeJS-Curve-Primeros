const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middleware they will be executed when run the app
    this.middlewares();

    // Here is How I call my methods when the constructor gets call at the end
    // Rutas de la application
    this.routes();
  }

  middlewares() {
    // Palabra clave app.use (To call my middlewares)
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.get("/", function (req, res) {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Running on port:", this.port);
    });
  }
}

module.exports = Server;
