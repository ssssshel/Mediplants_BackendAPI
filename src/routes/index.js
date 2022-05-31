const { Router } = require('express')
const { getUsers, postUsers, getUserById, deleteUserById, putUserById } = require('../controllers/users.controller')
const { getProducts, getProductById, getProductsByCategory, postProducts } = require('../controllers/products.controller')
const router = Router()

// USERS ROUTES
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', postUsers)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', putUserById)

// PRODUCTS ROUTES
router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.get('/products/:category', getProductsByCategory)
router.post('/products', postProducts)


module.exports = router