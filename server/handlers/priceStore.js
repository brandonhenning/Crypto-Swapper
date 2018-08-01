const fetch = require('node-fetch')
const URL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,XRP,ETH,DASH,BCH,EOS'
const redisConfig = require('../database/redisConfigs')
const redis = redisConfig.redis
const log = console.log

async function getPrices () {
    try {
        const response = await fetch(URL)
        const prices = await response.json()
        let btc = prices.USD
        let usd = 1 / prices.USD
        let xrp = 1 / prices.XRP
        let eth = 1 / prices.ETH
        let dash = 1 / prices.DASH
        let bch = 1 / prices.BCH
        let eos = 1 / prices.EOS
        await setPriceStoreInRedis(btc, xrp, usd, eth, dash, bch, eos)
    } catch (error) { console.log('Error fetching prices from external API', error) }
}

async function setPriceStoreInRedis (btc, xrp, usd, eth, dash, bch, eos) {
    try {
        await redis.set('BTC', btc)
        await redis.set('XRP', xrp)
        await redis.set('USD', usd)
        await redis.set('ETH', eth)
        await redis.set('DASH', dash)
        await redis.set('BCH', bch)
        await redis.set('EOS', eos)
    } catch (error) { console.log('Error setting prices in Redis', error) }
}


module.exports = {
    redis,
    getPrices
}