// express_crud/api/routes/index.js
const express = require('express')

const router = express.Router()

const users = require('./user')

router.use("/users", users)

module.exports = router