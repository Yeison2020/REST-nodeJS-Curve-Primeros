require("dotenv").config();
const Server = require("./models/server");

const server = new Server();

// Calling my class method here
server.listen();
