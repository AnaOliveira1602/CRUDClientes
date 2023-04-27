const mongoose = require("mongoose");
const ClienteModelSchema = new mongoose.Schema({
    Id: String,
    CPF: String,
    Nome: String,
    Prioridade: Boolean
});

module.exports = mongoose.model("Clientes", ClienteModelSchema);