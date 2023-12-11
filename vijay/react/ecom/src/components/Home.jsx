import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'
import { BsBag } from 'react-icons/bs'
import './Home.css'

const Home = () => {
  let [shoes, setShoes] = useState([])
  let [shoesAll, setShoesAll] = useState(4)
  let { products } = useContext(MainContext)

  useEffect(() => {
    let SHOES = products.filter((x) => x.category == 'shoes')
    setShoes(SHOES)
  }, [])
  return (
    <>
      <div className="home">
        <h1>Shoes</h1>
        <div className="wrapper">
          {
            shoes.slice(0, shoesAll).map((x) => {
              return (
                <div key={x.id} className="product">
                  <div className="img">
                    <img src={x.img} alt="" />
                  </div>
                  <h2>{x.title}</h2>
                  <h3><del>₹{x.price}</del> <span>₹{Math.trunc((x.price / 100) * (100 - x.discount))}</span></h3>
                  <div className="add">
                    <button><span>Add To Bag</span> <BsBag /></button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <button onClick={() => setShoesAll(shoes.length)}>Show All Shoes</button>
      </div>
    </>
  )
}

export default Home
