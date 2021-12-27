// express_crud/api/routes/index.js
console.log('bbb')
const express = require('express')

const router = express.Router()

const users = require('./user')

router.use("/users", users)

module.exports = router