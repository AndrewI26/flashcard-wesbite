const API_URL = 'http://localhost:8000'

async function httpGetFlashcards() {
    const res = await fetch(`${API_URL}/flashcards`)
    return await res.json()
}

async function httpAddFlashcard(flashcardObject) {
    const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(flashcardObject)
    }
    try {
        return await fetch(`${API_URL}/flashcards`, requestOptions)
    } catch(err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

async function httpDeleteFlashcard(id) {
    try {
        const requestOptions = {
            method: 'delete',
        }
        return await fetch(`${API_URL}/flashcards/${id}`, requestOptions)
    } catch(err) {
        return {
            ok: false
        }
    }
}

export {
    httpGetFlashcards,
    httpAddFlashcard,
    httpDeleteFlashcard
}