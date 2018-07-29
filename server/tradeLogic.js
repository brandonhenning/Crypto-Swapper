const store = require('./priceStore')
const redis = store.redis
const log = console.log


async function trade (balance, coin1, coin2) {
    try {
        const current = await redis.get(`${coin1}`)
        const btc = await redis.get(`BTC`)
        const oldBalance = current * balance
        const desired = await redis.get(`${coin2}`)
        const newBalance = oldBalance / desired
        const afterFees = calculateFees(newBalance)
        return afterFees
    } catch (error) {log('Error placing trade in tradeLogic.js', error)}
}


function calculateFees (balance) {
    return balance * 0.9975
}


module.exports = {
    trade
}