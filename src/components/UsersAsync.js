import { useState, useEffect } from "react";
///import axios from "axios";

function getUsers() {
  //return axios.get("https://jsonplaceholder.typicode.com/users");
  return Promise.resolve({
    data: [
      {
        id: 1,
        name: "Leanne Graham",
      },
      {
        id: 2,
        name: "Ervin Howell",
      },
    ],
  });
}

export default function UsersAsync() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      //const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const res = await getUsers();
      setUsers(res.data);
    };

    loadUsers();
  }, []);

  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}
