let app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./src/api/routes/pingRoute')(app);
require('./src/api/routes/usuarioRoute')(app);

app.listen(port, function () {
    console.log(`SERVIDOR ESCUTANDO NA PORTA ${port}`);
});