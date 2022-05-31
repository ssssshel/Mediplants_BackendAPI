const { Router } = require('express')
const { getUsers, postUsers } = require('../controllers/users.controller')
const router = Router()

router.get('/users', getUsers)
router.get('/users/:id')
router.post('/users', postUsers)

module.exports = router