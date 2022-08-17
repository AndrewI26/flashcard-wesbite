import {useEffect, useState} from 'react'
import { Link, BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"

import './styles.css'

import useFlashcards from './hooks/useFlashcards'

import Add from './pages/Add'
import Study from './pages/Study'
import Gallery from './pages/Gallery'

import Nav from './components/Nav'

const App = () => {
    const {flashcards, addFlashcard, getFlashcards, deleteFlashcard} = useFlashcards()
    
    
    const app = 
    <div>
        <Router>
            <Nav />
                <Routes>
                    <Route path='/' element={<p>home</p>}/>
                    <Route path='/study' element={<Study flashcards={flashcards}/>}/>
                    <Route path='/add' element={<Add addFlashcard={addFlashcard}/>}/>
                    <Route path='/gallery' element={<Gallery flashcards={flashcards} getFlashcards={getFlashcards} deleteFlashcard={deleteFlashcard}/>}/>
                </Routes>
        </Router>
    </div>

    return (
        <>
            {flashcards && app}
        </>
            
        
    )
}

export default App