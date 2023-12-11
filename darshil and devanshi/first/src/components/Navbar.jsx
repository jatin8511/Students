import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <p><NavLink to={'/'}>Home</NavLink></p>
                <p><NavLink to={'about'}>About</NavLink></p>
                <p><NavLink to={'contact'}>Contact</NavLink></p>
            </div>
        </>
    )
}

export default Navbar
