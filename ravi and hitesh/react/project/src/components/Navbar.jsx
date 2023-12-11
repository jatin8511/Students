import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/react.svg'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/'}>About</NavLink></li>
                    <li><NavLink to={'/'}>Menu</NavLink></li>
                    <li><NavLink to={'/'}>Products</NavLink></li>
                    <li><NavLink to={'/'}>Reviews</NavLink></li>
                    <li><NavLink to={'/'}>Contact</NavLink></li>
                    <li><NavLink to={'/'}>Docs</NavLink></li>
                </ul>
                <div className="icons">
                    <p><i className="fa-solid fa-magnifying-glass"></i></p>
                    <p><i className="fa-solid fa-shopping-cart"></i></p>
                </div>
            </div>

        </div>
    )
}

export default Navbar
