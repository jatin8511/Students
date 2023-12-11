import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navlinks">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'contact'}>Contact</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Navbar
