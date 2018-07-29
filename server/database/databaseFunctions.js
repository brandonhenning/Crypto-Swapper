const pool = require('./postgresConfig')
const log = console.log

async function createTables () {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS users(email text UNIQUE, coin text, coinAmount decimal)')
    } catch (error) {log('Erorr creating postgres database tables', error)}
}

async function createUser (email) {
    try {
        await pool.query(`INSERT INTO users(email, coin, coinAmount) VALUES ('${email}', 'USD', '100000');`)
    } catch (error) {log('Error creating user in database', error) }
}

async function getUser (email) {
    try {
        const user = await pool.query(`SELECT email, coin, coinAmount FROM users WHERE email='${email}'`)
        const result = user.rows[0]
        return result
    } catch (error) {log('Error retrieving user from database', error)}
}

module.exports = {
    createTables,
    createUser,
    getUser
}