import React, { useContext } from 'react'
import { MainContext } from '../App'
import { Link } from 'react-router-dom'

const Search = () => {
    let { searched, cart, detaile, removeItem, cartProduct } = useContext(MainContext)
    return (
        <div className='wrapper'>
            {
                searched.map((x) => {
                    return <div key={x.id} className="product">
                        <div className="img">
                            <Link to='detailProduct' onClick={() => detaile(x.id)}>
                                <img src={x.img} alt="" />
                            </Link>
                        </div>
                        <h2>{x.title}</h2>
                        <h3>₹{x.price}</h3>
                        <div className="add">

                            {cart.find(a => a.id == x.id) ?
                                <button onClick={() => { removeItem(x.id) }}>Remove Item</button>
                                :
                                <button onClick={() => { cartProduct(x.id) }}>Add to Cart</button>
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Search
