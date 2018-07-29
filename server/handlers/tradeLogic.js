const store = require('./priceStore')
const redis = store.redis
const log = console.log
const db = require('../database/databaseFunctions')


async function trade (balance, coin1, coin2) {
    try {
        const current = await redis.get(`${coin1}`)
        const oldBalance = current * balance
        const desired = await redis.get(`${coin2}`)
        const newBalance = oldBalance / desired
        const afterFees = calculateFees(newBalance)
        return afterFees
    } catch (error) {log('Error placing trade in tradeLogic.js', error)}
}


async function executeUserTrade (email, desiredCoin) {
    try {
        const user = await db.getUser(email)
        const newBalance = await trade(user.coinamount, user.coin, desiredCoin)
        db.storeNewUserBalance(email, desiredCoin, newBalance)
    } catch (error) {log('Error executing user trade', error)}
}


function calculateFees (balance) {
    return balance * 0.9975
}



module.exports = {
    trade,
    executeUserTrade
}