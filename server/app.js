const express = require('express')
const app = express()
const port = 3000
const priceStore = require('./handlers/priceStore')
const updatePriceLoop = setInterval(priceStore.getPrices, 5000)
const db = require('./database/databaseFunctions')
const cors = require('cors')
const bodyParser = require('body-parser')

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

async function checkUser (email, password) {
    const user = await db.authenticateUser(email, password)
    return user
}

app.listen(port)