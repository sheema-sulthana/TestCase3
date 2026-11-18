import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let stock = 10;
  return (
    <div className="wrapper">
      <button className="plus" onClick={() => {
        if (counter < stock) {
          setCounter(counter + 1);
        }
      }}> INCREAMENT </button>
      <p className="counter"> {counter} </p>
      <button className="minus" onClick={() => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      }}> DECREAMENT </button>
    </div>
  );
}
export default App;
