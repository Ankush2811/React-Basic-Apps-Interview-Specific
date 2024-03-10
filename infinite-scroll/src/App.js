import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log("data", data);
      setUsers((prevUsers) => [...prevUsers, ...data]);
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  
  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <ul>
        {users.map((user) => (
          <li>
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
