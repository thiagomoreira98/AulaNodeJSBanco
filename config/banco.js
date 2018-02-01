module.exports = function () {
    const pg = require('pg');
    const db = new pg.Client({
        user: process.env.POSTGRES_USER || 'postgres',
        host: process.env.POSTGRES_HOST ||'localhost',
        // database: process.env.POSTGRES_DATABASE || 'AulaNode',
        database: process.env.POSTGRES_DATABASE || 'postgres',
        // password: 'pg123',
        password: process.env.POSTGRES_PASSWORD || 'pg1234',
        port: process.env.POSTGRES_PORT || 5432
    });

    db.connect();

    return db;
}