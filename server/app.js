const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extented: true}))
app.use(bodyParser.json() )

module.exports = app
