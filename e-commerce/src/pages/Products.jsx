import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
import { MyStore } from "../context/ContextProvider";

const Products = () => {
  const [count, setCount] = useState(0);
  const { setProductData, productData } = useContext(MyStore);
  const pd = useLoaderData();
  console.log(count);
  console.log(pd);
  useEffect(() => {
    setCount(count + 1);
    setProductData(pd);
  }, []);

  return (
    <div className="px-5 min-h-screen pt-[80px]  pl-[220px] bg-stone-100">
      <h1 className="text-2xl font-semibold  mb-4">All Products </h1>
      <div className="flex flex-wrap gap-3 ">
        {pd.map((product) => {
          product.quantity = 0;
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
