const pool = require('../db/dbCredentials')

// devPool
// const pool = require("../db/devDbCredentials")

const getUsers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM users');
        const data = response.rows
        res.status(200).json({ success: true, message: "Users found", data })
    } catch (e) {
        res.status(400).json({message: "Busqueda inválida", error: true })
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
    } catch (e) {
        res.status(400).json({message: "Busqueda inválida", error: true} )
        console.log(res)
    }
}

const postUsers = async (req, res) => {
    const { name, surname, email, password } = req.body
    try {
        const response = await pool.query('INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4)', [name, surname, email, password])
        res.status(201).json({ success: true, message: 'User created', data: response })
    } catch (e) {
        res.status(400).json({message: "Ha ocurrido un error al intentar el registro", error: true })
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
    } catch (e) {
        res.status(400).json({message: "Ha ocurrido un error", error: true })
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
    } catch (e) {
        res.status(400).json({message: "Ha  ocurrido un error", error: true })
    }
}


module.exports = {
    getUsers, getUserById, postUsers, deleteUserById, putUserById
}