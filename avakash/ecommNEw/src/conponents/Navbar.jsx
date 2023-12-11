import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { MainContext } from '../App'
import { FaSearch } from 'react-icons/fa'
const Navbar = () => {
    let [searchVal, setSearchVal] = useState('')
    const { category, navigate, products, setSearched, cart, search } = useContext(MainContext);
    const [s, sets] = useState(false);

    const showList = () => {
        sets(!s);
    }
    const SearchHandler = (e) => {
        e.preventDefault()
        let searchedProducts = products.filter((x) => x.title.toLowerCase().includes(searchVal.toLowerCase()))
        setSearched(searchedProducts)
        navigate('/search')
    }
    return (
        <div className="navbar">
            <h1><NavLink to={'/'}>Logo</NavLink></h1>
            <div className="links">
                <ul className='as'>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li id='catafory' onClick={() => { showList() }}><NavLink>Category</NavLink></li>
                    <div className="dropdown-content" style={{ display: s ? 'block' : 'none' }}>
                        {s &&
                            category.map((x) => {
                                return <li onClick={() => { showList() }} key={x}><NavLink to={x}>{x}</NavLink></li>
                            })
                        }
                    </div>
                </ul>
            </div>
            <div className="search">
                <form onSubmit={SearchHandler} action="">
                    <input onChange={(e) => setSearchVal(e.target.value)} type="search" placeholder='Search' />
                    <button><FaSearch /></button>
                </form>
            </div>
            <div className="cart">
                <NavLink to={'cart'}><FaShoppingCart />{cart.length}</NavLink>
            </div>
        </div>
    )
}

export default Navbar
