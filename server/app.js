const express = require('express')
const app = express()
const port = 3000
const priceStore = require('./priceStore')
const updatePriceLoop = setInterval(priceStore.getPrices, 5000)






app.listen(port)