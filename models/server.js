const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Here is How I call my methods when the constructor gets call at the end
    this.routes();
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

module.export = Server;
