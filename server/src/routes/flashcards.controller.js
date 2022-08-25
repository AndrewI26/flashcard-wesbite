const { getAllFlashcards, getSingleFlashcard, existsWithId, addNewFlashcard, deleteFlashcard } = require('../models/flashcards.model')

async function httpGetAllFlashcards(req, res) {
    return res.status(200).json(await getAllFlashcards())
}

async function httpGetSingleFlashcard(req, res) {
    const flashcardId = Number(req.params.id)

    if (existsWithId(flashcardId)) {
        res.status(200).json(await getSingleFlashcard(flashcardId))
    } else {
        res.status(404).json({
            error: "No card with that id"
        })
    }
}

async function httpAddNewFlashcard(req, res) {
    const card = req.body 

    if (!card.front || !card.back) {
        return res.status(400).json({
            error: 'Missing required field'
        })
    }

    await addNewFlashcard(card)
    return res.status(201).json(card)
}

async function httpDeleteFlashcard(req, res) {
    const flashcardId = Number(req.params.id)
    if (!existsWithId(flashcardId)) {
        return res.status(404).json({
            error: `No card with id of ${flashcardId}, cannot delete.`
        })
        
    }
    await deleteFlashcard(flashcardId)
    return res.status(200).json()
}

module.exports = {
    httpGetAllFlashcards,
    httpGetSingleFlashcard,
    httpAddNewFlashcard,
    httpDeleteFlashcard
}