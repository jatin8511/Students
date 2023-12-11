import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'
import { Link } from 'react-router-dom'

const Home = () => {
    let { products, cartProduct, detaile, cart, removeItem } = useContext(MainContext)
    let [rendomProducts, setRendomProducts] = useState([])
    let [show, setShow] = useState(8);
    let [showButton, setShowButton] = useState(true);


    useEffect(() => {
        let rProducts = products.sort(() => 0.5 - Math.random())
        setRendomProducts(rProducts)
    }, []);

    function showItem() {
        setShow(rendomProducts.length);
        setShowButton(false);
    }



    return (
        <>
            <div className='wrapper'>
                {
                    rendomProducts.slice(0, show).map((x) => {
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
            {showButton && <button id='itemButton' onClick={() => showItem()}>Show All</button>}
        </>
    )
}

export default Home;