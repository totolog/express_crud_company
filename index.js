const express = require('express')
const app = express()
const router = require('./api/routes')

const port = process.env.PORT || 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/company')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use('/api', router)

app.listen(port)
console.info('listen on port: ' + port)