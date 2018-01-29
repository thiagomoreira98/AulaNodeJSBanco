let app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser(bodyParser.urlencoded()));

require('./src/api/rotas/rota')(app);

app.listen(3000, function () {
    console.log('Escutando');
});

