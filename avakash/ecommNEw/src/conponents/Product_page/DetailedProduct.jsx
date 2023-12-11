import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../App'

const DetailedProduct = ({product}) => {

    const {products , cartProduct , cart} = useContext(MainContext);
    const navigate = useNavigate();

  return (
    <div className='PContainer' >
      <div className="imgBox">
        <img id='img' src={product.img} alt="" />
      </div>
      <div className="detaile">
        <h2 id='as'>Titel : </h2>
        <h2 id='title' >{product.title}</h2>
        <br />
        <h2>Price : {product.price}</h2>
      <button id='cartB' onClick={() => {cartProduct(product.id); navigate('/')}}>Add To Cart</button>
      <button id='cartB' onClick={() => navigate('/cart')}>Go Cart</button>
      </div>
    </div>
  )
}

export default DetailedProduct
