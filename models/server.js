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
    // Home route will be replace for my middleware public I need to add api tp have another route
    this.app.get("/api", function (req, res) {
      res.json({
        message: "Get Api",
      });
    });
    this.app.put("/api", function (req, res) {
      res.json({
        message: "Put Api",
      });
    });
    this.app.delete("/api", function (req, res) {
      res.json({
        message: "Delete Api",
      });
    });
    this.app.post("/api", function (req, res) {
      res.json({
        message: "post Api",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Running on port:", this.port);
    });
  }
}

module.exports = Server;
