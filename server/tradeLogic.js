const store = require('./priceStore')
const redis = store.redis
const log = console.log

let balance = 1000

// practice trading 1000 for ETH

async function trade (balance, coin1, coin2) {
    const current = await redis.get(`${coin1}`)
    const desired = await redis.get(`${coin2}`)
    
}


async function firstBuy (balance, desiredCoin) {
    const btc = await redis.get(`USD`)
    const oldBalance = btc * balance
    const coin = await redis.get(`${desiredCoin}`)
    const newBalance = balance * coin
    log(oldBalance)
}


// trade(balance, 'DASH', 'ETH')
firstBuy(balance, 'ETH')