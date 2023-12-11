import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul className='navbarUl'>
                <li><NavLink to={'/'}> Home</NavLink></li>
                <li ><NavLink to='services'>Service</NavLink></li>
                <li><NavLink to={'contact'}>Contact</NavLink></li>
                <li><NavLink to={'redux'}>Redux</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
