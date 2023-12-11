import React, { useEffect, useState } from 'react'
import Kaibi from '../images/coding2.jpg'
import '../styles/Home.css'
import axios from 'axios'

const Home = () => {
    let [products, setProducts] = useState([])
    let GetUsers = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/admin/products')
        setProducts(result.data.products)
        console.log(result.data);
    }
    useEffect(() => {
        GetUsers()
    }, [])

    const AddToCart = async (id) => {
        // let result = await axios.get(`http://localhost:8080/api/v1/admin/products/${id}`)

        let result = await fetch(`http://localhost:8080/api/v1/admin/products/${id}`)



        console.log(await result.json())


    }

    return (
        <>

            <div className='home'>
                <div className="wrapper">
                    {
                        products.map((x) => {
                            return (
                                <div key={x._id} className="product">
                                    <div className="img">
                                        <img src={x.images[0]} alt="" />
                                    </div>
                                    <h2>{x.title}</h2>
                                    <h3>{x.price}</h3>
                                    <button onClick={() => AddToCart(x._id)}>Add To Cart</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div></>
    )
}

export default Home
