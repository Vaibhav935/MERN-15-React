import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MyStore } from "../context/ContextProvider";
import QuantBtn from "./QuantBtn";

const ProductCard = ({ elem, location }) => {
  const { setCartItems, cartItems, itemCount, setItemCount } =
    useContext(MyStore);

  console.log(cartItems);

  const addCart = () => {
    const exists = cartItems.some(item => item.id === elem.id)
    if(exists){
        toast.error("Product already exists")
        return;
    }
    // const already = [...cartItems,elem]
    // console.log(already)
    // setItemCount(1);

    // useEffect(()=>{
    //     cartItems.map((elem)=>{
    //     if(elem.id == e.id){
    //         console.log("already exist")
    //     }
    // })
    // },[cartItems])

    // setCartItems((prev) => [...prev, {item:elem, quantity:1}]);
    elem.quantity = 1;
    setCartItems((prev) => [...prev, elem]);
    toast.success("Product added to cart");
    cartItems.map((e) => {
      if (e.id !== elem.id) {
      } else {
        console.log("Item already exist");
      }
    });
  };

  const removeCart = (id) => {
    toast.error("Removed Item")
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="border p-5 rounded bg-gray-700 border-white text-white">
      <div>
        <img className="h-50 w-40 " src={elem.image} alt="" />
      </div>
      <h1 className="font-medium mt-4">
        {elem.title.split(" ").slice(0, 3).join(" ") + "..."}
      </h1>
      <p className="text-sm">${elem.price}</p>
      <div className="flex gap-7 py-4">
        {elem.quantity >= 1 ? (
          <QuantBtn elem={elem} />
        ) : location == "/cart" ? (
          <button
            onClick={() => {
              removeCart(elem.id);
            }}
            className="px-4 py-2 rounded bg-red-500 cursor-pointer active:scale-99"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addCart}
            className="px-4 py-2 rounded bg-amber-500 cursor-pointer active:scale-99"
          >
            Add Cart
          </button>
        )}

        <button className="px-4 py-2 rounded bg-green-400 cursor-pointer active:scale-99">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
