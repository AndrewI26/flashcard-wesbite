import { useState } from "react"

export default function Add(props) {
    const {addFlashcard} = props

    const [input, setInput] = useState('')

    function handleInput(event) {
        setInput(event.target.value)
    }

    function addFlashcards() {
        const questions = input.split(';')
        const flashcardObjects = questions.map(question => {
            const [front, back] = question.split('-')
            return {
                front: front,
                back: back
            }
        })
        flashcardObjects.map(flashcardObject => addFlashcard(flashcardObject))
        setInput('')
    }

    return (
        <div className='add-container'>   
            <div className='add-example'>
                <p>Flashcards will be parsed with the following format:</p>
                <div>
                    <p>front-back;</p>
                    <p>front-back;</p>
                </div> 
            </div>
            <textarea 
                placeholder='Enter your flashcards here...' 
                className='add-textbox'
                value={input}
                onChange={handleInput}></textarea>
            <button 
                className='add-btn' 
                onClick={() => {addFlashcards()}}
                >
                Add flashcards
            </button>
        </div>
    )
}