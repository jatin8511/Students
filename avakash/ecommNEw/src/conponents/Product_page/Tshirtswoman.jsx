import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../App'
import { Link } from 'react-router-dom'

const Tshirtswoman = () => {

  let { products, cartProduct , detaile } = useContext(MainContext)
  let [rendomProducts, setRendomProducts] = useState([])
  let [show, setShow] = useState(8);
  let [showButton, setShowButton] = useState(true);
  let a = true;

  useEffect(() => {
    let cata = products.filter(b => b.category === 'Tshirtwomen');
    setRendomProducts(cata)
  }, []);

  function showItem() {
    setShow(rendomProducts.length);
    setShowButton(false);
  }

  if (rendomProducts.length <= 8)
    a = false

  return (
    <>
      <div className='wrapper'>
        {
          rendomProducts.slice(0, show).map((x) => {
            return <div key={x.id} className="product">
              <div className="img">
                <Link to='../detailProduct' onClick={() => detaile(x.id)}>
                  <img src={x.img} alt="" />
                </Link>
              </div>
              <h2>{x.title}</h2>
              <h3>₹{x.price}</h3>
              <div className="add">
                <button onClick={() => { cartProduct(x.id, x.title) }}>Add To Cart</button>
              </div>
            </div>
          })
        }
      </div>
      {a && showButton && <button id='itemButton' onClick={() => showItem()}>Show All</button>}
    </>
  )
}

export default Tshirtswoman