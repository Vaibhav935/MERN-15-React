import React, { useCallback, useEffect, useState } from "react";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  console.log(`App`);

  const greet = useCallback(() => {
    console.log(`Greet fn`);
    console.log(`Greet fn`);
  },[]);

  useEffect(() => {
    greet();
  }, [count]);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change count</button>
      <About greet={greet} />
    </div>
  );
};

export default App;
