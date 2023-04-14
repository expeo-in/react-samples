import axios from "axios";
import { useState, useEffect } from "react";

function useFetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return [users];
}

function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return [data];
}

export { useFetchUsers, useFetchData };
