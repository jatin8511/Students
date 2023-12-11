import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1 className="logo">Logo</h1>
                <ul className="navlinks">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/'}>About</NavLink></li>
                    <li><NavLink to={'/'}>Contact</NavLink></li>
                </ul>
                <div className="cart">
                    <NavLink to={'cart'}><BsBag /></NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
