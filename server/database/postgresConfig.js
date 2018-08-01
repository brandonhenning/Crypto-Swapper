const pg = require('pg')

const pool = new pg.Pool({
    user: 'wdrojfwvpdhkbc',
    host: host,
    database: 'd2s5uq37l21psr',
    password: pass,
    port: '5432'
})


module.exports = pool

