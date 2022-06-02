const { Router } = require('express')
// const { getIndex } = require('../controllers/index.controller')
const { getUsers, postUsers, getUserById, deleteUserById, putUserById } = require('../controllers/users.controller')
const { getProducts, getProductById, getProductsByCategory, postProducts, deleteProductById,putProductById } = require('../controllers/products.controller')
const router = Router()

// router.get('/', getIndex)

// USERS ROUTES
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', postUsers)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', putUserById)

// PRODUCTS ROUTES
router.get('/products', getProducts)
router.get('/products/id/:id', getProductById)
router.get('/products/category/:category', getProductsByCategory)
router.post('/products', postProducts)
router.delete('/products/id/:id', deleteProductById)
router.put('/products/id/:id', putProductById)


module.exports = router