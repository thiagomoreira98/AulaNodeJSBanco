const repositorio = require('./repository');

module.exports = {
    inserir, 
    selecionar, 
    deletar,
    atualizar
}

function inserir(req, res) {
    repositorio.inserir(req, res);
}

function selecionar(req, res) {
    repositorio.selecionar(req, res);
}

function deletar(req, res) {
    repositorio.deletar(req, res);
}

function atualizar(req, res) {

}