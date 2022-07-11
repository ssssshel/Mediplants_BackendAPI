const pool = require("../db/dbCredentials")

// devPool
// const pool = require("../db/devDbCredentials")



const postOrders = async (req, res) => {
  const { products, price, email } = req.body
  const status = "Pendiente"
  try {
    const response = await pool.query('INSERT INTO orders (products, price, email, status) VALUES ($1, $2, $3, $4)', [products, price, email, status])
    res.status(201).json({ success: true, message: 'Order created' })
  } catch (error) {
    res.status(400).json({ message: "Error al intentar crear orden", error: true })
  }
}

module.exports = {
  postOrders
}