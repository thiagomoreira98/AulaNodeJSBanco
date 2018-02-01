const db = require('../../../config/banco')();

module.exports = {
    selecionar,
    buscar,
    inserir,
    alterar,
    deletar,
}

function selecionar(filtro, callback) {
    db.query('select * from public.selecionarUsuarios($1)', [filtro.nome], function (err, data) {
        if (err)
            return callback(err);

        callback(null, data.rows);
    });
}

function buscar(id, callback) {
    db.query('select * from public.buscarUsuario($1)', [id], function (err, data) {
        if (err) {
            return callback(err);
        }

        callback(data.rows[0]);
    });
}

function inserir(usuario) {
    db.query('SELECT * FROM public.inserirUsuario($1, $2, $3)', [usuario.nome, usuario.cpf, usuario.email], function (err, data) {
        if (err) {
            return callback(err);
        }

        callback(null, null);
    });
}

function alterar(id, usuario, callback) {
    db.query('SELECT * FROM public.alterarUsuario($1, $2, $3, $4)', [id, usuario.nome, usuario.cpf, usuario.email], function (err, data) {
        if (err) {
            return callback(err);
        }

        callback(null, null);
    });
}

function deletar(id) {
    db.query('select * from public.deletarUsuario($1)', [id], function (err, data) {
        if (err) {
            return callback(err);
        }

        callback(null, null);
    });
}