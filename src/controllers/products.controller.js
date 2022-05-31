const pool = require("../db/dbCredentials")

const getProducts = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM products')
    const data = response.rows
    res.status(200).json({ success: true, message: "Products found", data })
  } catch (error) {
    res.status(404).json({ error })
  }
}

const getProductById = async (req, res) => {
  const id = req.params.id
  try {
    const response = await pool.query('SELECT * FROM products WHERE id = $1', [id])
    const data = response.rows
    if (response.rowCount == 0) {
      res.status(404).json({ success: false, message: `Product ${id} does not exist` })
    } else {
      res.status(200).json({ success: true, message: `Product ${id} found`, data })
    }
  } catch (error) {
    res.status(400).json({ error })
  }
}

const getProductsByCategory = async (req, res) => {
  const category = req.params.category
  try {
    const response = await pool.query('SELECT * FROM products WHERE category = $1', [category])
    const data = response.rows
    if (response.rowCount == 0) {
      res.status(404).json({ success: false, message: `Products of ${category} category does not exist` })
    } else {
      res.status(200).json({ success: true, message: `Products of ${category} successfully found`, data })
    }
  } catch (error) {
    res.status(400).json({ error })
  }
}

const postProducts = async (req, res) => {
  const { name, scname, category, img, price, information, stock } = req.body
  try {
    const response = await pool.query('INSERT INTO products (name, scname, category, img, price, information, stock) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, scname, category, img, price, information, stock])
    res.status(201).json({ success: true, message: 'Product created', data: response })
  } catch (error) {
    res.status(400).json({ error })
  }
}

module.exports = {
  getProducts, getProductById, getProductsByCategory, postProducts
}