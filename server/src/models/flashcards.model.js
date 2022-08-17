let flashcardsData = [
    {
        front: 'What is the color of the sun?',
        back: 'Red',
        id: 1
    },
    {
        front: 'What is 2 + 2?',
        back: '4',
        id: 2
    },
    {
        front: 'What is osmosis?',
        back: 'A process by which molecules of a solvent tend to pass through a semipermeable membrane from a less concentrated solution into a more concentrated one, thus equalizing the concentrations on each side of the membrane.',
        id: 3
    }
]

let currentId = flashcardsData.length

function getAllFlashcards() {
    return flashcardsData
}

function getSingleFlashcard(id) {
    const queriedFlashcard = flashcardsData.filter(card => card.id === id)
    if (queriedFlashcard.length > 0) {
        return queriedFlashcard
    } else {
        return undefined
    }
}

function addNewFlashcard(flashcard) {
    currentId += 1
    flashcardsData.push({
        ...flashcard,
        id: currentId
    })
}

function existsWithId(id) {
    const cardWithId = getSingleFlashcard(id)
    return (cardWithId ? true : false)
}

function deleteFlashcard(id) {
    flashcardsData = flashcardsData.filter(card => card.id != id)
}

module.exports = {
    getAllFlashcards,
    getSingleFlashcard,
    addNewFlashcard,
    existsWithId,
    deleteFlashcard
}