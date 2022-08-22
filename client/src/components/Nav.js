import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Nav(props) {
    return (
        <div className='nav-container'>
            <Link to='/study' className='nav-header hover-underline-animation'>Study</Link>
            <Link to='/add' className='nav-header hover-underline-animation'>Add</Link>
            <Link to='/gallery' className='nav-header hover-underline-animation'>Gallery</Link>
        </div>
    )
}