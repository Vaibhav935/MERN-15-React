import React, { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [binToggle, setBinToggle] = useState(false);
  const [fileToggle, setFileToggle] = useState(false);
  const [chromeToggle, setChromeToggle] = useState(false);
  return (
    <div>
      <MyContext.Provider
        value={{
          setBinToggle,
          binToggle,
          setFileToggle,
          fileToggle,
          setChromeToggle,
          chromeToggle,
        }}
      >
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default ContextProvider;
