import React, { Children, createContext, useEffect, useState } from "react";

export const MyStore = createContext();

const ContextProvider = ({ children }) => {
  const [authToggle, setAuthToggle] = useState(true);
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const [registeredUsers, setregisteredUsers] = useState(
    JSON.parse(localStorage.getItem("Registered Users")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("LoggedInUser") || null
  );
  const logoutUser = () => {
    localStorage.removeItem("LoggedInUser");
    setLoggedInUser(null);
  };

  const setData = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=50");
    setProductData(res.data.products);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <MyStore.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        registeredUsers,
        setregisteredUsers,
        authToggle,
        setAuthToggle,
        logoutUser,
        productData,
        setProductData,
        cartData,
        setCartData,
        itemCount,
        setItemCount,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
