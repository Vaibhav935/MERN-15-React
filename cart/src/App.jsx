import React, { useState } from 'react'
import NavBar from './components/NavBar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart';

const App = () => {

  const [toggle, setToggle] = useState(false)
  const [cartItems, setCartItems] = useState([])


  const products = [
  {
    id: 0,
    name: "Wireless Headphones",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    price: 79.99
  },
  {
    id: 1,
    name: "Smart Watch",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    price: 249.99
  },
  {
    id: 2,
    name: "Laptop",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    price: 999.99
  },
  {
    id: 3,
    name: "Coffee Maker",
    imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
    price: 89.99
  },
  {
    id: 4,
    name: "Running Shoes",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    price: 129.99
  },
  {
    id: 5,
    name: "Camera",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    price: 649.99
  }
];

  return (
    <div className='min-h-screen bg-gray-200'>
      <NavBar setToggle={setToggle} />
      {toggle ? <Cart cartItems={cartItems} /> : ""}
      <ProductCard products={products} setCartItems={setCartItems} />

    </div>
  )
}

export default App
