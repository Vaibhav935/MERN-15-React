import React, { useContext, useState } from "react";
import { MyStore } from "../context/ContextProvider";

const QuantBtn = ({ product }) => {
  const { setItemCount, itemCount } = useContext(MyStore);

  const incQuantity = () => {
    product.quantity = product.quantity + 1;
    setItemCount((prev) => prev + 1);
  };
  const decQuantity = () => {
    product.quantity = product.quantity - 1;
    setItemCount((prev) => prev + 1);
  };
  return (
    <div className="flex rounded overflow-hidden">
      <div
        className="flex items-center justify-center cursor-pointer px-2.5 p-1 bg-red-500"
        onClick={decQuantity}
      >
        -
      </div>
      <div className="flex items-center justify-center px-2.5 p-1 bg-gray-300">
        {product.quantity}
      </div>
      <div
        className="flex items-center justify-center cursor-pointer px-2.5 p-1 bg-green-500"
        onClick={incQuantity}
      >
        +
      </div>
    </div>
  );
};

export default QuantBtn;
