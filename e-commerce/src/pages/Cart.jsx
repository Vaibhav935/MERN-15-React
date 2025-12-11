import React, { useContext } from "react";
import { MyStore } from "../context/ContextProvider";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router";

const Cart = () => {
  const { cartData } = useContext(MyStore);
  const location = useLocation();
  return (
    <div className="px-5 min-h-screen pt-[80px]  pl-[220px] bg-stone-100 w-full">
      <h1 className="text-2xl font-semibold  mb-4">Cart </h1>
      <div className="flex flex-wrap gap-5 ">
        {cartData.length > 0 ? (
          cartData.map((product) => {
            return (
              <ProductCard
                product={product}
                // key={product.id}
                location={location.pathname}
              />
            );
          })
        ) : (
          <div className="w-full h-[100%] flex justify-center items-center  text-3xl font-semibold ">
            Cart Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
