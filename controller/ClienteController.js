const Clientes = require("../models/ClienteModel");
module.exports = {
    async read(req, res){
        const clientesList = await Clientes.find();
        return res.json(clientesList);
    },

    async create(req, res){
        const {Id, CPF, Nome, Prioridade} = req.body;

        if(!Id || !CPF){
            return res.status(400).json({error: "É necessario preencher um Id e um CPF."});
        }

        const ClienteCriado = await Clientes.create({
            Id,
            CPF,
            Nome,
            Prioridade
        });
        return res.json(ClienteCriado);
    },

    async delete(req, res){
        const{ id } = req.params;
        const ClienteDeletado = await Clientes.findOneAndDelete({_id : id });
        if(ClienteDeletado){
            return res.json(ClienteDeletado);
        }
    },
    async update(req, res){
        const { id } = req.params;
        const { Id, CPF, Nome, Prioridade} = req.body;

        const cliente = await Clientes.findOne({_id: id});
        cliente.Id = Id;
        cliente.CPF = CPF;
        cliente.Nome = Nome;
        cliente.Prioridade = Prioridade;

        await cliente.save();

        return res.json(cliente);
    }
}