const fetch = require('node-fetch')
const URL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,XRP,ETH,DASH,BCH,EOS'
const Redis = require('ioredis')
const redis = new Redis()



async function getPrices () {
    try {
        const response = await fetch(URL)
        const prices = await response.json()
        let usd = 1 / prices.USD
        let xrp = 1 / prices.XRP
        let eth = 1 / prices.ETH
        let dash = 1 / prices.DASH
        let bch = 1 / prices.BCH
        let eos = 1 / prices.EOS
        await setPriceStoreInRedis(xrp, usd, eth, dash, bch, eos)
    } catch (error) { console.log('error fetching prices from external API', error) }
}

async function setPriceStoreInRedis (xrp, usd, eth, dash, bch, eos) {
    try {
        await redis.set('XRP', xrp)
        await redis.set('USD', usd)
        await redis.set('ETH', eth)
        await redis.set('DASH', dash)
        await redis.set('BCH', bch)
        await redis.set('EOS', eos)
    } catch (error) { console.log('error setting prices in Redis', error) }
}


module.exports = {
    redis,
    getPrices
}