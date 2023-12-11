import { createContext, useCallback, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './conponents/Home'
import Cart from './conponents/Cart';
import Navbar from './conponents/Navbar'
import Products from './conponents/Products'
import Earbuds from './conponents/Product_page/Earbuds'
import Shoes from './conponents/Product_page/Shoes'
import Tshirts from './conponents/Product_page/Tshirts'
import Tshirtswoman from './conponents/Product_page/Tshirtswoman'
import DetailedProduct from './conponents/Product_page/DetailedProduct';
import Search from './conponents/Search';


export const MainContext = createContext()

function App() {
  let navigate = useNavigate()
  const [products, setProducts] = useState(Products);
  const [cart, setCart] = useState([]);
  const [category, setCataegory] = useState([]);
  const [searched, setSearched] = useState([]);
  const [detailProduct, setDetaileProduct] = useState(0);

  const cartProduct = (id) => {
    let localCart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(localCart)
    let tProduct = products.find(b => b.id == id);
    if (!(localCart.includes(tProduct))) {
      localStorage.setItem('cart', JSON.stringify([...localCart, tProduct]))
      let newLocalCart = JSON.parse(localStorage.getItem('cart'))
      setCart(newLocalCart);
    } else {
      alert("alreacy in Cart")
    }
  }

  const removeItem = (id) => {
    let updateItem = cart.filter(x => x.id != id);
    setCart(updateItem);
  }

  const increment = (id) => {
    products.find(b => b.id == id).qty++;
    setCart([...cart]);
  }
  const decrement = (id) => {
    let product = cart.find(x => x.id == id);
    if (product.qty <= 1) {
      removeItem(id);
    } else {
      product.qty--
      setCart([...cart]);
    }
  }

  const detaile = (id) => {
    let product = products.find(x => x.id == id);
    localStorage.setItem('single', JSON.stringify(product))
    let localProduct = JSON.parse(localStorage.getItem('single'))
    setDetaileProduct(localProduct)
  }

  useEffect(() => {
    let cata = products.map(b => b.category);
    setCataegory([...new Set(cata)])
  }, [])

  let contextValue = {
    products,
    cart,
    category,
    cartProduct,
    removeItem,
    increment,
    decrement,
    detaile,
    setCart,
    searched,
    setSearched,
    navigate,
    setDetaileProduct
  }
  return (
    <>

      <MainContext.Provider value={contextValue}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='Earbud' element={<Earbuds />} />
          <Route path='Tshirtwomen' element={<Tshirtswoman />} />
          <Route path='Shoes' element={<Shoes />} />
          <Route path='Tshirt' element={<Tshirts />} />
          <Route path='search' element={<Search />} />
          <Route path='detailProduct' element={<DetailedProduct product={detailProduct} />} />
        </Routes>
      </MainContext.Provider>

    </>
  )
}

export default App