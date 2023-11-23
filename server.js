// Importing express module
const express = require('express')

// Create an instance of express
const app = express()

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000

// Middleware to parse JSON and urlencoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// A simple route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Starting the server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
