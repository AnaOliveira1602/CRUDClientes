const express = require("express");
const app = express();
const rotas = require("./rotas");
app.use(express.json());
app.use(rotas);
require("./config/dbConfig");

app.get("/", (req, res) => {
    return res.json({
        nome: "Ana",
        idade: 21,
        sexo: "Quer",
        salario: 5000
    });
})

app.listen(9091);