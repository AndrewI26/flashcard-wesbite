const {
    getAllFlashcards, 
    getSingleFlashcard, 
    existsWithId, 
    addNewFlashcard,
    deleteFlashcard
} = require('../models/flashcards.model')

function httpGetAllFlashcards(req, res) {
    res.status(200).json(getAllFlashcards())
}

function httpGetSingleFlashcard(req, res) {
    const flashcardId = Number(req.params.id)

    if (existsWithId(flashcardId)) {
        res.status(200).json(getSingleFlashcard(flashcardId))
    } else {
        res.status(404).json({
            error: "No card with that id"
        })
    }
}

function httpAddNewFlashcard(req, res) {
    const card = req.body 

    if (!card.front || !card.back) {
        return res.status(400).json({
            error: 'Missing required field'
        })
    }

    addNewFlashcard(card)
    return res.status(201).json(card)
}

function httpDeleteFlashcard(req, res) {
    const flashcardId = Number(req.params.id)
    if (!existsWithId(flashcardId)) {
        return res.status(404).json({
            error: `No card with id of ${flashcardId}, cannot delete.`
        })
        
    }
    deleteFlashcard(flashcardId)
    return res.status(200).json()
}

module.exports = {
    httpGetAllFlashcards,
    httpGetSingleFlashcard,
    httpAddNewFlashcard,
    httpDeleteFlashcard
}