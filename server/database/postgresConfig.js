const pg = require('pg')

const pool = new pg.Pool({
    user: 'brandonhenning',
    host: DATBASE_URL,
    database: 'd2s5uq37l21psr',
    password: '123',
    port: '5432'
})

module.exports = pool

