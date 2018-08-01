const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const priceStore = require('./handlers/priceStore')
const updatePriceLoop = setInterval(priceStore.getPrices, 5000)
const leaderboard = require('./handlers/leaderboard')
const dollarUpdateLoop = setInterval(leaderboard.leaderboardUpdate, 60000)
const db = require('./database/databaseFunctions')
const cors = require('cors')
const bodyParser = require('body-parser')
const tradeEngine = require('./handlers/tradeLogic')
const log = console.log

db.createTables()

app.use(cors())
app.use(bodyParser.json())

app.get('/:email/:password', async (request, response) => {
    const user = await checkUser(request.params.email, request.params.password)
    if (user) {
        return response.json({user})
    } else {
        return response.json({ message: 'User and password combination not found, please try again' })
    }
})

app.get('/:email/:password/:coin', async (request, response) => {
    try {
        const user = await checkUser(request.params.email, request.params.password)
        if (user) {
            const newUserBalance = await tradeEngine.executeUserTrade(user[0].email, request.params.coin)
            return response.json({ msg:'Trade successful' })
        }
    } catch (error) {log('Error placing trade for user', error)}
})


async function checkUser (email, password) {
    const user = await db.authenticateUser(email, password)
    return user
}


app.listen(port)