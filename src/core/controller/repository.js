const db = require('../../../config/banco')();

module.exports = {
    inserir,
    selecionar,
    deletar,
    atualizar
}


function inserir(req, res) {
    db.query('SELECT * FROM COMERCIAL.ADD_CLIENTE($1, $2, $3)', [req.body.nome, req.body.cpf, req.body.email],
        function (err, data) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send(err);
                return;
            }
            console.log(data.rows[0]);
            res.status(200);
            res.send(data.rows[0]);
        });
}

function selecionar(req, res) {
    db.query('select * from comercial.Cliente', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.send(err);
            return;
        }
        console.log(data.rows);
        res.status(200);
        res.send(data.rows);
        });
}

function deletar(req, res) {
    db.query('select * from comercial.deleteClient($1)', [req.params.id], 
        function (err, data) {
            if (err) {
                console.log(err);
                res.status(500);
                res.send(err);
                return;
            }
            console.log(data.rows[0]);
            res.status(200);
            res.send(data.rows[0])
        });
}

function atualizar(req, res) {

}