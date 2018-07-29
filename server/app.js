const express = require('express')
const app = express()
const port = 3000
const priceStore = require('./handlers/priceStore')
const updatePriceLoop = setInterval(priceStore.getPrices, 5000)
const db = require('./database/databaseFunctions')
db.createTables()


app.listen(port)