const {Pool} = require('pg')

const pool = new Pool({
    host: 'motty.db.elephantsql.com',
    user: 'rwhmkfpa',
    password: 'SBJkND-2pjCz_JiMrvLxeJFEonbpBzoI',
    database: 'rwhmkfpa',
    port: '5432'
})

module.exports = pool