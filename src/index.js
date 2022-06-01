const express = require('express')
const routes = require('./routes/index')
const app = express()

const port = 3000 || 3001

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Bienvenido a mediplants API')
})

// routes
app.use(routes)

app.listen(port, () => {
    console.log(`Server running at ${port} port`)
})
