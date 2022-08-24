const { get } = require('../app')
const flashcardsDatabase = require('./flashcards.mongo')

const DEFAULT_FLASHCARD_ID = 0

async function getAllFlashcards() {
    const flashcards = await flashcardsDatabase.find({})
    return flashcards
}

async function getSingleFlashcard(id) {
    return await flashcardsDatabase
        .find({id: id})
}

async function getLatestId() {
    const flashcards = await flashcardsDatabase.find({})
    
    if (!flashcards) {
        return DEFAULT_FLASHCARD_ID
    } 
    return flashcards.length
}

async function saveFlashcard(flashcard) {
    await flashcardsDatabase.findOneAndUpdate({
        id: flashcard.id
    }, flashcard, {
        upsert: true
    })
}

async function addNewFlashcard(flashcard) {
    const newId = await getLatestId() + 1

    const newFlashcard = Object.assign(flashcard, {
        id: newId
    })
    console.log(newFlashcard)

    return await saveFlashcard(newFlashcard)
}

function existsWithId(id) {
    const cardWithId = getSingleFlashcard(id)
    return (cardWithId ? true : false)
}

async function deleteFlashcard(id) {
    await flashcardsDatabase.remove({id: id})
}

module.exports = {
    getAllFlashcards,
    getSingleFlashcard,
    addNewFlashcard,
    existsWithId,
    deleteFlashcard
}