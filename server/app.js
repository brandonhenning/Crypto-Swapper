const express = require('express')
const app = express()
const port = 3000
const priceStore = require('./priceStore')
const updatePriceLoop = setInterval(priceStore.getPrices, 5000)
const db = require('./database/databaseFunctions')

db.createTables()



db.getUserBalance('prescott.henning@gmail.com')


app.listen(port)