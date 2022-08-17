import { useEffect } from "react"
import GalleryCard from "../components/GalleryCard"

export default function Gallery(props) {
    const {flashcards, getFlashcards, deleteFlashcard} = props
    
    useEffect(() => {
        getFlashcards()
    }, [])

    let cardElements
    if (flashcards !== undefined) {
        cardElements = flashcards.map(flashcard => {
            return <GalleryCard key={Math.random() * 100} flashcard={flashcard} deleteFlashcard={deleteFlashcard}/>
        })
    }
    
    return (
        <div className='gall-container'>
            {cardElements}
        </div>
    )
}