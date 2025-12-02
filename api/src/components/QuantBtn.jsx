import React, { useContext } from "react";
import { MyStore } from "../context/ContextProvider";

const QuantBtn = ({elem}) => {
  const { setItemCount, itemCount } = useContext(MyStore);

  const incQuantity = () => {
    elem.quantity = elem.quantity + 1;
    setItemCount((prev) => prev + 1);
  };
  const decQuantity = () => {
    elem.quantity = elem.quantity - 1;
    setItemCount((prev) => prev + 1);
  };
  return (
    <div className="bg-orange-500 w-20 rounded flex items-center justify-evenly overflow-hidden">
      {" "}
      <button
        onClick={decQuantity}
        className="bg-gray-900 h-full w-full cursor-pointer text-2xl active:scale-98"
      >
        -
      </button>
      <span className="bg-gray-200 h-full flex items-center w-full justify-center text-black">
        {elem.quantity}
      </span>
      <button
        onClick={incQuantity}
        className="bg-gray-900 h-full w-full cursor-pointer text-2xl active:scale-98"
      >
        +
      </button>
    </div>
  );
};

export default QuantBtn;
