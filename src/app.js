const express = require('express')
const cors = require('cors')
const app = express()

const { EmailRoutes } = require('./routes/email-routes')

app.use(cors({
    origin: 'https://www.unusualshop.com.br'
}))

app.use(express.json())
app.use(EmailRoutes)


module.exports = {
    app
}