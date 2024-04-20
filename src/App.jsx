import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const cntplus = () => {
    if(count>=20){
      return ;
    }
    setCount(count + 1);
  };
  const cntmin = () => {
    if(count<=0){
      return ;
    }
    setCount(count - 1);
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h3>Count is : {count}</h3>
      <button type="button" onClick={cntplus}>
        Add 1+
      </button>
      <button type="button" onClick={cntmin}>
        Sub 1-
      </button>
    </>
  );
}

export default App;
