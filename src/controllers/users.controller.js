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

const getUserById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        const data = response.rows
        if (response.rowCount == 0) {
            res.status(404).json({ success: false, message: `User ${id} does not exist` })
        } else {
            res.status(200).json({ success: true, message: `User ${id} found`, data })
        }
    } catch (error) {
        res.status(404).json({ error })
    }
}

const postUsers = async (req, res) => {
    const { name, email } = req.body
    try {
        const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
        res.status(201).json({ success: true, message: 'User created', data: response })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const deleteUserById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
        if (response.rowCount == 0) {
            res.status(404).json({ success: false, message: `User ${id} cannot be deleted because doesn't exist` })
        } else {
            res.status(200).json({ success: true, message: `User ${id} deleted`, data: response })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}

const putUserById = async (req, res) => {
    const id = req.params.id
    const { name, email } = req.body
    try {
        const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])
        if (response.rowCount == 0) {
            res.status(404).json({ success: false, message: `User ${id} cannot be updated because doesn't exist` })
        } else {
            res.status(200).json({ success: true, message: `User  ${id} was updated with name: ${name} and email: ${email}` })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}


module.exports = {
    getUsers, getUserById, postUsers, deleteUserById, putUserById
}