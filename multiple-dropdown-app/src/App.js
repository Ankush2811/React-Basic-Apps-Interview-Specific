import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectCountry, setSelectCountry] = useState([]);
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "USA", value: "US", cities: ["NewYork", "Chicago"] },
    { name: "Australia", value: "AUS", cities: ["Melbourne", "Sydney"] },
  ];

  return (
    <div className="App">
      <h1>Multi Dropdown App</h1>
      <select onChange={(e) => setSelectCountry(e.target.value)}>
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select>
        {countries[selectCountry]?.cities.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
