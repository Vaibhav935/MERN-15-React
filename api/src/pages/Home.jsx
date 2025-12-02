import React, { useContext } from 'react'
import { MyStore } from '../context/ContextProvider'
import ProductCard from '../components/ProductCard'


const Home = () => {
    const {productData} = useContext(MyStore)
  return (
    <div className='px-10 py-5 pt-20'>
      <h1 className='font-semibold text-2xl underline'>#All Products </h1>
      <div className='mt-2 flex flex-wrap gap-8 pt-5'>
        {productData.map((elem)=>{
            return <ProductCard key={elem.id} elem={elem}/>
        })}
      </div>
    </div>
  )
}

export default Home
