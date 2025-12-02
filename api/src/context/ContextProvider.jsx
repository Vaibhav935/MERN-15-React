import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const MyStore = createContext();

const ContextProvider = ({ children }) => {

    const [productData, setProductData] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [itemCount, setItemCount] = useState(0)

    const getProducts = async ()=>{
        const api = 'https://fakestoreapi.com/products'

        try {
            const res = await axios.get(api)
            if(res){
                setProductData(res.data)
            }
        } catch (error) {
            console.log(`Error Occured :-${error}`)
        }
        
    }

    useEffect(() => {
      getProducts();
    }, [])
    

  return (
    <div>
      <MyStore.Provider value={{productData, setCartItems, cartItems, itemCount, setItemCount}}>
        {children}
      </MyStore.Provider>
    </div>
  );
};

export default ContextProvider;
