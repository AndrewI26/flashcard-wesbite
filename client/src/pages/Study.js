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

    function resetDifficulties() {
        setDifficulties([false, false, false])
    }

    function nextFlashcard() {
        incrementFlashcard()
        resetDifficulties()
        flipFlashcard()
    }

    const difficultiesArray = ['Easy', 'Moderate', 'Hard']
    const radioButtons = difficulties.map((difficulty, index) => {
        if (difficultiesArray[index] !== 'Moderate') {
            return <>
                <label className='study-radio-label'>
                    <input type='radio' name='radio' checked={difficulty} id={index} onClick={toggleRadio} className='study-radio'/>
                    <p className='study-radio-title'>{difficultiesArray[index]}</p>
                </label>   
            </>
        } else {
            return <div className='middle'>
                <label className='study-radio-label'>
                    <input type='radio' name='radio' checked={difficulty} id={index} onClick={toggleRadio} className='study-radio'/>
                    <p className='study-radio-title'>{difficultiesArray[index]}</p>
                </label>   
            </div>
        }
        
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
            <div className='study-radio-container'>{radioButtons}</div>
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