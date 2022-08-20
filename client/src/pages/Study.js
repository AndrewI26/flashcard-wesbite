import { useState } from "react"

export default function Study(props) {
    const {flashcards} = props
    const [flashcardIndex, setFlashcardIndex] = useState(0)
    const [showFront, setShowFront] = useState(true)
    const [difficulties, setDifficulties] = useState([false, false, false])

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

    const difficultiesArray = ['Easy', 'Moderate', 'Hard']
    const radioButtons = difficulties.map((difficulty, index) => {
        return <>
            <label className='study-radio-label'>
                <input type='radio' name='radio' checked={difficulty} id={index} onClick={toggleRadio} className='study-radio'/>
                <p>{difficultiesArray[index]}</p>
            </label>
            
        </>
    })

    function toggleRadio(e) {
        const pressedRadioIndex = e.target.id
        setDifficulties(prevDifficulties => {
            const updatedArray = prevDifficulties.map((difficulty, index) => {
                return (index == pressedRadioIndex ? !difficulty : false)
            })
            return updatedArray
        })
        
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
            {radioButtons}
            <button onClick={nextFlashcard} className='study-btn'>Next card</button>
        </div>
    } else {
        display = <h1>Add some flashcards to study!</h1>
    }

    return (
        <div className='study-container'>
            {display}
        </div>
    )
}