const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/clientes";

const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUniFiedTopology: true
});

module.exports = conexao;