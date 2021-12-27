// express_crud/api/routes/user.js

const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  console.log('get')
  return await userController.find_users(req, res)
})

router.post('/', async (req, res) => {
  return await userController.create_user(req, res)
})

router.get('/:id', async (req, res) => {
  return await userController.find_user(req, res)
})

router.put('/:id', async (req, res) => {
  return await userController.update_user(req, res)
})

router.delete('/:id', async (req, res) => {
  return await userController.delete_user(req, res)
})

module.exports = router