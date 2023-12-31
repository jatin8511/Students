import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'about'}>About</NavLink></li>
                    <li><NavLink to={'services'}>Services</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
