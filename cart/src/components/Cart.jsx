import React, { useState } from 'react'
import ProductCard from './ProductCard'

const Cart = ({cartItems}) => {


  return (
    <div className='absolute top-15 bg-gray-500 h-150 w-full p-10 flex flex-wrap gap-10'>
      {/* {cartItems.map((prod)=>{
        return (
            <div className='h-100 border w-80 flex flex-col gap-5' key={prod.id}>
        <img className='w-full ' src={prod.imageUrl} alt="" />
        <h1 className='px-6 font-semibold text-lg'>{prod.name}</h1>
        <h2 className='px-6'>{prod.price}</h2>
        <div className='flex justify-between px-5'>
            <button className='px-6 py-2 rounded bg-yellow-500 text-black'>Buy Now</button>
            <button className='px-6 py-2 rounded bg-yellow-500 text-black'>Add to Cart</button>
        </div>
      </div>
        )
      })} */}

      {cartItems.map((prod)=>{
        return (
            <div className='h-100 border w-80 flex flex-col gap-5' key={prod.id}>
        <img className='w-full ' src={prod.imageUrl} alt="" />
        <h1 className='px-6 font-semibold text-lg'>{prod.name}</h1>
        <h2 className='px-6'>{prod.price}</h2>
        <div className='flex justify-between px-5'>
            <button className='px-6 py-2 rounded bg-yellow-500 text-black'>Buy Now</button>
            <button className='px-6 py-2 rounded bg-yellow-500 text-black'>Add to Cart</button>
        </div>
      </div>
        )
      })}
      
      <ProductCard cartItems={cartItems}/>
    </div>
  )
}

export default Cart
