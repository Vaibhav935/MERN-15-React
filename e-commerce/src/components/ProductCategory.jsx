import React, { useContext } from "react";
import { MyStore } from "../context/ContextProvider";

// beauty, fragrances,furniture, groceries, home-decoration, kitchen-accessories

const ProductCategory = ({ product }) => {
  const { productData } = useContext(MyStore);

  return (
    <div className="mt-1">
      <div className="w-60  shadow-[1px_1px_4px_rgba(0,0,0,0.5)]">
        <img
          className="w-60 hover:scale-105 cursor-pointer"
          src={product.images[0]}
          alt=""
        />
        <h1 className=" p-2 text-[15px]">{product.title}</h1>
      </div>
    </div>
  );
};

export default ProductCategory;
