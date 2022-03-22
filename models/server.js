const express = require("express");

// So importent need review later
var cors = require("cors");

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
    // CORS
    this.app.use(cors());
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
      res.status(400).json({
        message: "Put Api",
      });
    });
    this.app.delete("/api", function (req, res) {
      res.json({
        message: "Delete Api",
      });
    });
    this.app.post("/api", function (req, res) {
      res.status(201).json({
        message: "post Api",
      });
    });

    this.app.patch("/api", function (req, res) {
      res.json({
        message: "patch Api",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Running on port:", this.port);
    });
  }
}

// Best way to import classes
module.exports = Server;
