const pool = require('../db/dbCredentials')

const getUsers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM users');
        const data = response.rows
        res.status(200).json({ success: true, message: "Users found", data })
    } catch (error) {
        res.status(404).json({ error })
    }
}

// const getUser = async (req, res) => {
//     const id = req.query
//     try {
        
//     } catch (error) {
        
//     }
// }

const postUsers = async (req, res) => {
    const { name, email } = req.body
    try {
        const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
        res.status(200).json({success: true, message: 'User created', data: response})
    } catch (error) {
        res.status(400).json({error})
    }
}



module.exports = {
    getUsers, postUsers
}