import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

const App = () => {
  let [counter, setCounter] = useState(0);
  let [msg, setMsg] = useState("");

  const handleInc = () => {
    setCounter(counter + 1);
  };

  const handleDec = () => {
    setCounter(counter < 1 ? 0 : counter - 1);
  };

  useEffect(() => {
    alert("Page rendered successfully");
  }, []);

  useEffect(() => {
    setMsg(`Counter value ${counter}`);
  }, [counter]);

  return (
    <>
      <div className="counter">
        <p className="val">{counter}</p>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <div className="msg">{msg}</div>
      </div>
    </>
  );
};

export default App;
