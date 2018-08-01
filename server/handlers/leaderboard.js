const db = require('../database/databaseFunctions')
const log = console.log
const store = require('./priceStore')
const redis = store.redis

async function getUsers () {
    try {
        const users = await db.batchUsers()
        return users
    } catch (error) {log('Error retrieving users from datbase', error)}
}

async function convertCryptoToDollarBalance (user) {
    try {
        const coin = await redis.get(user.coin)
        const coinBalance = coin * user.coinamount
        const btc = await redis.get('BTC')
        const dollarBalance = btc * coinBalance
        await db.updateUserDollarBalance(user.email, dollarBalance)
    } catch (error) {log('Error converting crypto to dollar balance', error)}
}

async function updateAllUsersDollarBalance () {
    try {
        const users = await getUsers()
        users.forEach(user => convertCryptoToDollarBalance(user))
    } catch (error) {log('Error updating all users account dollar balance', error)}
}

async function hourlyLeaderboardUpdate () {
    try {
        await updateAllUsersDollarBalance()
        const leaderboard = await db.getLeaderboard()
        return leaderboard.rows
    } catch (error) {log('Error updating hourly leaderboard', error)}
}

// hourlyLeaderboardUpdate()

module.exports = {
    hourlyLeaderboardUpdate
}