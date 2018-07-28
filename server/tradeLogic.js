const store = require('./priceStore')
const redis = store.redis
const log = console.log

let balance = 1000


// picture trade 2 ETH for DASH
async function trade (balance, coin1, coin2) {
    const current = await redis.get(`${coin1}`)
    const btc = await redis.get(`BTC`)
    const oldBalance = current * balance
    const desired = await redis.get(`${coin2}`)
    const newBalance = oldBalance / desired
    const afterFees = calculateFees(newBalance)
    console.log(afterFees)
    return afterFees
}

async function firstBuy (balance, desiredCoin) {
    const btc = await redis.get(`USD`)
    const btcBalance = btc * balance
    const coin = await redis.get(`${desiredCoin}`)
    const coinPerBTC = 1 / coin
    const newBalance = btcBalance * coinPerBTC
    const afterFees = calculateFees(newBalance)
    return afterFees
}

function calculateFees (balance) {
    return balance * 0.9975
}

trade(1000, 'BTC', 'USD')

module.exports = {
    firstBuy,
    trade
}