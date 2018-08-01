const pool = require('./postgresConfig')
const log = console.log

async function createTables () {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS users(email text UNIQUE, password text, coin text, coinAmount decimal, dollarbalance decimal)')
    } catch (error) {log('Erorr creating postgres database tables', error)}
}

async function createUser (email, password) {
    try {
        await pool.query(`INSERT INTO users(email, password, coin, coinAmount, dollarbalance) VALUES ('${email}', '${password}', 'USD', '100000', '0');`)
    } catch (error) {log('Error creating user in database', error) }
}

async function getUser (email) {
    try {
        const user = await pool.query(`SELECT email, coin, coinAmount FROM users WHERE email='${email}'`)
        const result = user.rows[0]
        return result
    } catch (error) {log('Error retrieving user from database', error)}
}

async function authenticateUser (email, password) {
    try {
        const user = await pool.query(`SELECT email, coin, coinAmount, dollarbalance, password FROM users WHERE email='${email}' AND password='${password}'`)
        if (user.rows.length > 0)
            {return user.rows}
    } catch (error) {log('Error authenticating user from database', error)}
}

async function storeNewUserBalance (email, coin, coinAmount) {
    try {
        await pool.query(`UPDATE users SET coin='${coin}', coinamount='${coinAmount}' WHERE email='${email}';`)
    } catch (error) {log('Error storing new user balance in database', error) }
}

async function deleteUser (email) {
    try {
        await pool.query(`DELETE FROM users WHERE email='${email}'`)
    } catch (error) {log('Error deleting user from database', error)}
}

async function getLeaderboard () {
    try {
        const leaders = await pool.query('SELECT * FROM users ORDER BY dollarbalance DESC;')
        return leaders
    } catch (error) {log('Error getting learderboard from database', error)}
}

async function updateUserDollarBalance (email, dollarAmount) {
    try {
        await pool.query(`UPDATE users SET dollarbalance='${dollarAmount}' WHERE email='${email}'`)
    } catch (error) {log('Error updating user dollar balance', error)}
}

async function batchUsers () {
    try {
        const all = await pool.query('SELECT * FROM users')
        const users = all.rows
        return users
    } catch (error) {log('Error retrieving all users from database', error)}
}



module.exports = {
    createTables,
    createUser,
    getUser,
    storeNewUserBalance,
    deleteUser,
    batchUsers,
    updateUserDollarBalance,
    getLeaderboard,
    authenticateUser
}