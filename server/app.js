const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const autoRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
  })
  .then(() => console.log('Mongo connected ...'))
  .catch(error => console.error(error))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', autoRoutes)

module.exports = app
