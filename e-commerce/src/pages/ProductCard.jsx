import React, { useContext, useState } from "react";
import { CardSim, CheckCheck, Star } from "lucide-react";
import QuantBtn from "../components/QuantBtn";
import { MyStore } from "../context/ContextProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ProductCard = ({ product, location }) => {
  const [count, setCount] = useState(true);
  const navigate = useNavigate();
  const { setCartData, productData, cartData, setItemCount } =
    useContext(MyStore);

  const showPDets = () => {
    navigate(`/products/productDetails/${product.id}`);
  };

  const handleCart = () => {
    const exists = cartData.some((item) => item.id === product.id);
    if (exists) {
      alert("Product already exists");
      return;
    }

    console.log(`q ke phle`);
    product.quantity = 1;
    console.log(`q ke bad`);
    console.log(count);
    setCount((prev) => !prev);
    setItemCount((prev) => prev + 1);
    setCartData([...cartData, { ...product, quantity: 1 }]);
    alert("Product Added to cart");
  };

  const removeCartItem = () => {
    const ar = cartData.filter((prod) => prod.id !== product.id);
    setCartData(ar);
  };

  return (
    <div>
      <div className=" w-[280px] h-[480px] rounded-2xl overflow-hidden shadow-[3px_3px_6px_rgba(0,0,0,0.5)] ">
        <div className="h-[55%] flex items-center justify-center ">
          <img
            onClick={showPDets}
            className="object-cover h-[100%] bg-center cursor-pointer hover:scale-105"
            src={product.images[0]}
            alt=""
          />
        </div>
        <div className="px-3 flex flex-col justify-between bg-stone-200 h-[45%] pb-5 pt-1">
          <div>
            <h1 className="font-semibold text-xl ">{product.title}</h1>
            <p className="text-gray-500 text-xs ">{product.brand}</p>
            <p className="bg-green-700 max-w-max font-medium text-sm  rounded text-white px-1 py-0.5 flex items-center gap-1 mt-1">
              {product.rating}{" "}
              <span className="text-white ">
                <Star size={10} color="#ffffff" strokeWidth={3} />
              </span>{" "}
            </p>
            <div className="flex gap-2 items-center pt-1">
              <p className="font-semibold ">${product.discountPercentage}</p>
              <p className="text-xs text-gray-500 line-through ">
                ${product.price}
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-evenly mt-5 ">
            {/* {product.quantity == 1 ? (
              <QuantBtn product={product} />
            ) : location == "/cart" ? (
              <button
                onClick={removeCartItem}
                className="px-4 py-2 rounded bg-red-400 font-semibold cursor-pointer text-white "
              >
                Remove Item
              </button>
            ) : (
              <button
                onClick={handleCart}
                className="px-4 py-2 rounded bg-blue-400 font-semibold cursor-pointer text-white "
              >
                Add Cart
              </button>
            )} */}
            {location === "/cart" ? (
              product.quantity > 0 ? (
                <QuantBtn product={product} />
              ) : (
                <button
                  onClick={removeCartItem}
                  className="px-4 py-2 rounded bg-red-500 cursor-pointer active:scale-99"
                >
                  Remove Item
                </button>
              )
            ) : cartData.some((item) => item.id === product.id) ? (
              <button
                onClick={() => navigate("/cart")}
                className="px-4 py-2 rounded bg-green-500 cursor-pointer active:scale-99"
              >
                Check Cart
              </button>
            ) : (
              <button
                onClick={handleCart}
                className="px-4 py-2 rounded bg-amber-500 cursor-pointer active:scale-99"
              >
                Add Cart
              </button>
            )}

            <button className="px-4 py-2 rounded bg-green-500 font-semibold cursor-pointer text-white ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
