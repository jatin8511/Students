import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'

const Home = () => {
    let { products } = useContext(MainContext)
    let [rendomProducts, setRendomProducts] = useState([])
    let [show, setShow] = useState(8)
    useEffect(() => {
        let rProducts = products.sort(() => 0.5 - Math.random())
        setRendomProducts(rProducts)
    }, [])
    return (
        <>
            <div className='wrapper'>
                {
                    rendomProducts.slice(0, show).map((x) => {
                        return <div key={x.id} className="product">
                            <div className="img">
                                <img src={x.img} alt="" />
                            </div>
                            <h2>{x.title}</h2>
                            <h3>₹{x.price}</h3>
                            <div className="add">
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    })
                }
            </div>
            <button onClick={() => setShow(rendomProducts.length)}>Show All</button>
        </>
    )
}

export default Home
