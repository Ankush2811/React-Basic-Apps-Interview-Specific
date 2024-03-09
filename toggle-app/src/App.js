import React from "react";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <h1>Toggle App</h1>
      <button onClick={openModal}>Open Modal</button>
      {modalOpen && (
        <div onClick={(e) => e.stopPropagation()}>
          <h2>Modal Content</h2>
          <p>
            This is a modal. Click outside the modal or the close button to
            close it.
          </p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default App;
