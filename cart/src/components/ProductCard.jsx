import React from "react";
import {toast} from 'react-toastify'

const ProductCard = ({ products, setCartItems, cartItems }) => {
  const handleCart = (prod) => {
    setCartItems((prev) => [...prev, prod]);
    alert("Product added to cart.")
  };

  return (
    <div className="px-10 flex flex-wrap gap-10">
      {products.map((prod) => {
        return (
          <div className="h-100 border w-80 flex flex-col gap-5" key={prod.id}>
            <img className="w-full " src={prod.imageUrl} alt="" />
            <h1 className="px-6 font-semibold text-lg">{prod.name}</h1>
            <h2 className="px-6">{prod.price}</h2>
            <div className="flex justify-between px-5">
              <button className="px-6 py-2 rounded bg-yellow-500 text-black">
                Buy Now
              </button>
              <button
                onClick={() => {
                  handleCart(prod);
                }}
                className="px-6 py-2 rounded bg-yellow-500 text-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
