const { Pool } = require('pg')

const HOST = process.env.DBHOST
const USER = process.env.DBUSER
const PASSWORD = process.env.DBPASSWORD
const DATABASE = process.env.DBNAME
const PORT = process.env.DBPORT

const pool = new Pool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT
})

module.exports = pool