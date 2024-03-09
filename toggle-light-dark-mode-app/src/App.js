import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <div
      className="App"
      style={{ backgroundColor: isDarkMode ? "grey" : "lightblue" }}
    >
      <h1>Light/Dark Mode App</h1>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <h2 style={{ color: isDarkMode ? "black" : "white" }}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </h2>
        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
    </div>
  );
}

export default App;
