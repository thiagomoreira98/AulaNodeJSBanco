const controller = require('../../core/controller/controller');
module.exports = function (app) {
    app.get('/', function(req, res) {
        res.send('OK');
    });

    app.get('/selecionar', controller.selecionar);
    app.post('/inserir', controller.inserir);
    app.put('/atualizar', controller.atualizar);
    app.delete('/deletar/:id', controller.deletar);
}