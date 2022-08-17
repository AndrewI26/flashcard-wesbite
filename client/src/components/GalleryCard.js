import { useState } from "react"
import trashIcon from '../trash-icon.png'


export default function GalleryCard(props) {
    const {front, back, id} = props.flashcard
    const {deleteFlashcard} = props

    const [isHovered, setIsHovered] = useState(false)
    
    function handleMouseHover() {
        setIsHovered(prevIsHovered => true)
    }

    function handleMouseLeave() {
        setIsHovered(false)
    }

    return (
        <div className='gall-card-container' onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
            <p className='gall-card-front'>{front}</p>
            <hr className='gall-card-break'/>
            <p className='gall-card-back'>{back}</p>
            {isHovered && <img src={trashIcon} className='gall-card-img' onClick={() => {deleteFlashcard(id)}}></img>}
        </div>
    )
}