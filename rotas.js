const express = require("express");
const rotas = express.Router();
const ClienteController = require("./controller/ClienteController");

rotas.get("/clientes", ClienteController.read);
rotas.post("/clientes", ClienteController.create);
rotas.delete("/clientes/:id", ClienteController.delete);
rotas.post("/clientes/:id", ClienteController.update);

module.exports = rotas;