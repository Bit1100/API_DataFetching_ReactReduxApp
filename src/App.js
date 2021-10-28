import Navbar from "./components/navbar";
import Users from "./components/users";
import "./assets/styles/main.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  function handleFetchData() {
    const getUsers = async () => {
      const response = await axios.get("https://reqres.in/api/users?page=1");

      const usersData = response.data.data;

      setUsers(usersData);
      setLoading(false);
    };

    setTimeout(() => {
      getUsers();
    }, 2000);
  }
  return (
    <>
      <Navbar handleFetchData={() => handleFetchData()} />
      {loading ? (
        <div className="loader flex justify-center items-center wrap">
          Click Get Users Button to fetch Users
        </div>
      ) : (
        <Users users={users} />
      )}
    </>
  );
};

export default App;
