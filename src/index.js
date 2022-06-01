const express = require('express')
const routes = require('./routes/index')
const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('dotenv').config();

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Bienvenido a mediplants API')
})

// routes
app.use(routes)

app.listen(port, () => {
    console.log(`Server running at ${port} port`)
})