import { useState, useEffect, useCallback } from 'react'

import { httpGetFlashcards, httpAddFlashcard, httpDeleteFlashcard } from './requests'

export default function useFlashcards() {
    const [flashcards, setFlashcards] = useState([{}])

    useEffect(() => {
        getFlashcards()
    }, [])

    const getFlashcards = useCallback(async () => {
        await httpGetFlashcards()
            .then(response => setFlashcards(response))
    }, [])

    const addFlashcard = useCallback(async (flashcardObject) => {
        const response = await httpAddFlashcard(flashcardObject);
    
        const success = response.ok;
        if (success) {
          getFlashcards();
      }}, [getFlashcards])

    const deleteFlashcard = useCallback(async (id) => {
        const response = await httpDeleteFlashcard(id);
    
        // TODO: Set success based on response.
        const success = response.ok;
        if (success) {
          getFlashcards()
        } 
      }, [])

    return {
        flashcards,
        addFlashcard, 
        deleteFlashcard
    }
}