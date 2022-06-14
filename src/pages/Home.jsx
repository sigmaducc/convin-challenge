import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [allUsers, setAllUsers] = useState([]);

  async function getAllUsers() {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setAllUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return <div>Home</div>;
}

export default Home;
