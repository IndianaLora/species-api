const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("speciesDB.json");
const middlewars = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewars);
server.use(router);

server.listen(port);
