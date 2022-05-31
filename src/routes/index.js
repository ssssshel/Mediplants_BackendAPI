const { Router } = require('express')
const { getUsers, postUsers, getUserById, deleteUserById, putUserById } = require('../controllers/users.controller')
const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', postUsers)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', putUserById)

module.exports = router