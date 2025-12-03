import React, { useContext } from "react";
import { MyStore } from "../context/ContextProvider";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const Cart = () => {
  const { cartItems } = useContext(MyStore);
  // console.log(cartItems.filter((val) => val.id));
  const location = useLocation()
  console.log(location)
  return (
    <div className="px-10 py-5 pt-20">
      <h1 className="font-semibold text-2xl underline">#Cart Items </h1>
      <div className="mt-2 flex flex-wrap gap-8 pt-5">
        {cartItems.map((elem) => {
          return <ProductCard key={elem.id} elem={elem} location={location.pathname} />
        })}
      </div>
    </div>
  );
};

export default Cart;
