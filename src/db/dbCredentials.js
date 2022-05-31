const { Pool } = require('pg')

const pool = new Pool({
    host: 'motty.db.elephantsql.com',
    user: 'rwhmkfpa',
    password: 'SBJkND-2pjCz_JiMrvLxeJFEonbpBzoI',
    database: 'rwhmkfpa',
    port: '5432'
})

// const HOST = process.env.DBHOST
// const USER = process.env.DBUSER
// const PASSWORD = process.env.DBPASSWORD
// const DATABASE = process.env.DBNAME
// const PORT = process.env.DBPORT

// const pool = new Pool({
//     host: HOST,
//     user: USER,
//     password: PASSWORD,
//     database: DATABASE,
//     port: 5432
// })

module.exports = pool