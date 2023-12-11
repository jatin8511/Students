import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul className='navbar'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'about'}>About</NavLink></li>
                <li><NavLink to={'contact'}>Contact</NavLink></li>
                <li><NavLink to={'api'}>Api</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
