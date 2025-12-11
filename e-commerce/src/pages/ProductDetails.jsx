import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { CarTaxiFront, ShoppingCart, Star } from "lucide-react";
import { MyStore } from "../context/ContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const { setCartData, productData, cartData } = useContext(MyStore);

  const [product, setProduct] = useState([null]);

  const handleCart = () => {
    // const exist = productData.some((prod) => prod.id === product.id);
    // if (exist) {
    //   alert("Product Already Exists");
    //   return;
    // }
    // const prod = productData.find((prod) => product.id === prod.id);
    product.quantity = 2;
    setCartData([...cartData, product]);
    alert("Product Added to cart");
  };

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="flex px-5 min-h-screen pt-[80px]  pl-[220px] bg-stone-100 w-full">
      <div className="max-h-max w-[80%]">
        <img
          src={product?.images?.[0]}
          alt="pi"
          className="shadow-[3px_3px_6px_rgba(0,0,0,0.5)]"
        />
        <div className="p-5  flex justify-between  w-140 ">
          <button
            onClick={handleCart}
            className="px-10 py-3 text-2xl flex gap-2 rounded bg-orange-400 font-semibold cursor-pointer text-white "
          >
            <ShoppingCart /> Add Cart
          </button>
          <button className="px-10 py-3 text-2xl rounded bg-orange-500 font-semibold cursor-pointer text-white ">
            Buy Now
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-5">
        <div>
          <h1 className="font-semibold text-2xl mb-2">{product.title}</h1>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <p className="bg-green-700 max-w-max font-medium text-sm  rounded text-white px-1 py-0.5 flex items-center gap-1 mt-1">
            {product.rating}{" "}
            <span className="text-white ">
              <Star size={10} color="#ffffff" strokeWidth={3} />
            </span>{" "}
          </p>
          <h4 className="font-semibold text-3xl mt-3">${product.price}</h4>
        </div>
        <div>
          <ul>
            <h1>Available offers</h1>
            <li>
              1. Bank Offer5% cashback on Axis Bank Flipkart Debit Card up to
              ₹750T&C
            </li>
            <li>
              2. Bank Offer5% cashback on Flipkart SBI Credit Card upto ₹4,000
              per calendar quarterT&C
            </li>
            <li>
              3. Bank Offer10% off up to ₹1,500 on BOBCARD EMI Transactions, Min
              Txn Value: ₹5,000T&C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
