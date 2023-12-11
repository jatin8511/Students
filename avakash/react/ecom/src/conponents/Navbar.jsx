import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1><NavLink to={'/'}>Logo</NavLink></h1>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                </ul>
                <div className="cart">
                    <NavLink to={'cart'}>     <FaShoppingCart /></NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
