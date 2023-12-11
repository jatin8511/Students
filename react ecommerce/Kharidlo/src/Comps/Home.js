import React, { useContext } from 'react'
import { MainCont } from '../App'
import './Home.css'
import HomeSwiper from './HomeSwiper'
import { Autoplay, Pagination, Navigation } from "swiper";


const Home = () => {
    const { Products } = useContext(MainCont)
    return (
        <>
            <div className="home">
                <HomeSwiper />
                <div className="produuctsWrapper">
                    {
                        Products.map((product) => {
                            return <div className="product">
                                <div className="img">
                                    <img src={product.img} alt="" />
                                </div>
                                <h3>{product.title}</h3>
                                <h4><del>₹{product.price}</del><span> ₹{Math.trunc((product.price / 100) * (100 - product.discount))}</span></h4>
                                <div className="addCart">
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        })

                    }

                </div>
            </div>
        </>
    )
}

export default Home
