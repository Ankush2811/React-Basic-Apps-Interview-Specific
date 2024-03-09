import React, { useState } from "react";
import "./App.css";

function App() {
  const slidesData = [
    {
      id: 1,
      title: "Slide 1",
      imageUrl: "https://via.placeholder.com/500x300?text=Slide+1",
    },
    {
      id: 2,
      title: "Slide 2",
      imageUrl: "https://via.placeholder.com/500x300?text=Slide+2",
    },
    {
      id: 3,
      title: "Slide 3",
      imageUrl: "https://via.placeholder.com/500x300?text=Slide+3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="App">
      <h1>Slideshow App</h1>
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? slidesData.length - 1 : currentSlide - 1
          )
        }
      >
        Previous
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === slidesData.length - 1 ? 0 : currentSlide + 1
          )
        }
      >
        Next
      </button>
      <img
        src={slidesData[currentSlide]?.imageUrl}
        alt={slidesData[currentSlide]?.imageUrl}
      />
      <p>{slidesData[currentSlide]?.title}</p>
    </div>
  );
}

export default App;
