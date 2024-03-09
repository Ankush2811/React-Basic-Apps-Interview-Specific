import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editItems, setEditItems] = useState(null);
  const handleAddItem = () => {
    if (editItems !== null) {
      const updatedItems = [...items];
      updatedItems[editItems] = inputValue;
      setItems(updatedItems);
      setEditItems(null);
      setInputValue("");
    } else {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  const handleEditItem = (index) => {
    setInputValue(items[index]);
    setEditItems(index);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleEditItem(index)}
            >
              Edit
            </button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDeleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
