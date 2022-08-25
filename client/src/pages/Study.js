import { useState } from "react"

export default function Study(props) {
    const {flashcards} = props
    const [flashcardIndex, setFlashcardIndex] = useState(0)
    const [showFront, setShowFront] = useState(true)

    const indexedFlashcard = flashcards[flashcardIndex]

    function incrementFlashcard() {
        setFlashcardIndex(prevFlashcardIndex => {
            if (prevFlashcardIndex === flashcards.length - 1) {
                return 0
            } else {
                return prevFlashcardIndex + 1
            }
        })
    }

    function flipFlashcard() {
        setShowFront(prevShowFront => !prevShowFront)
    }

    function nextFlashcard() {
        incrementFlashcard()
        flipFlashcard()
    }

    let display
    if (indexedFlashcard?.front && indexedFlashcard?.back) {
        display = 
        showFront ? 
        <div className='study-container'>
            <div className='study-qmark-front'>
                <p>?</p>
            </div>
            <p className='study-info'>{indexedFlashcard.front}</p>
            <button onClick={flipFlashcard} className='study-btn'>Flip to back</button>
        </div> 
        :
        <div className='study-container'>
            <div className='study-qmark-back'>
                <p>?</p>
            </div>
            <p className='study-info'>{indexedFlashcard.back}</p>
            <button onClick={nextFlashcard} className='study-btn'>Next card</button>
        </div>
    } else {
        display = <div className='study-container'><h1 className='study-nofc'>Add some flashcards to study!</h1></div>
    }

    return (
        <div className='study-container'>
            {display}
        </div>
    )
}