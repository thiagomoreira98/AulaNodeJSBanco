module.exports = function () {
    const pg = require('pg');
    const db = new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'AulaNode',
        password: 'pg123',
        port: 5432
    });

    db.connect();

    return db;
}