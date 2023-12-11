import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="links">
                <p><NavLink to='/'>Home</NavLink></p>
                <p><NavLink to='about'>About</NavLink></p>
                <p><NavLink to='contact'>Contact</NavLink></p>
            </div>
        </>
    )
}



export default Navbar