import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(null);
  const options = ["Option1", "Option2", "Option3"];
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };
  const selectOption = (option) => {
    setOption(option);
    setIsOpen(false);
  };
  return (
    <div className="App">
      <h1>Dropdown App-User Select</h1>
      <button onClick={toggleOptions}>{option || "Select an option"}</button>
      {isOpen && (
        <div>
          {options.map((option, index) => (
            <div key={index} onClick={() => selectOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
