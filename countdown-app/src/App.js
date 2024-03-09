import React, { useState, useEffect } from "react";
import "./App.css";

function App({ initialCount }) {
  const [count, setCount] = useState(20);
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  }, [initialCount]);
  return (
    <div className="App">
      <h1>Reverse Countdown App</h1>
      <h3>Time Remaining :{count}</h3>
    </div>
  );
}

export default App;
