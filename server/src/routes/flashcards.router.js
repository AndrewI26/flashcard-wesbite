const express = require('express')

const {
    httpGetAllFlashcards, 
    httpGetSingleFlashcard,
    httpAddNewFlashcard,
    httpDeleteFlashcard
} = require('./flashcards.controller').default

const flashcardsRouter = express.Router()

flashcardsRouter.get('/', httpGetAllFlashcards)
flashcardsRouter.get('/:id', httpGetSingleFlashcard)
flashcardsRouter.post('/', httpAddNewFlashcard)
flashcardsRouter.delete('/:id', httpDeleteFlashcard)

module.exports = flashcardsRouter
