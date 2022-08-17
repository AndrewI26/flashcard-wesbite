const express = require('express')
const cors = require('cors')

const flashcardsRouter = require('./routes/flashcards.router') 
const flashcardsController = require('./routes/flashcards.controller')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use('/flashcards', flashcardsRouter)

module.exports = app