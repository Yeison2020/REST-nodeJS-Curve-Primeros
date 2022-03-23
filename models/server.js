const express = require("express");

// So importent need review later
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // This help other developer to see how your path looks like for each of the routes
    this.userPath = "/api/user";

    // Middleware they will be executed when run the app
    this.middlewares();

    // Here is How I call my methods when the constructor gets call at the end
    // Rutas de la application
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Palabra clave app.use (To call my middlewares)\
    // Home route default replacement
    this.app.use(express.static("public"));
  }

  // Important how I created the path here and It's the one I'm going to use here
  routes() {
    this.app.use(this.userPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server Running on port:", this.port);
    });
  }
}

// Best way to import classes
module.exports = Server;
