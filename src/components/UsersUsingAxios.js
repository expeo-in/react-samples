import axios from "axios";
import { useEffect, useState, useRef } from "react";
import User from "./User";

export default function UsersUsingAxios() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const nameRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/usersx")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  const addUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        id: 0,
        name: nameRef.current.value,
      })
      .then((res) => {
        setUsers([...users, res.data]);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        setUsers(users.filter((u) => u.id !== id));
      });
  };

  const updateUser = (user) => {
    axios
      .put("https://jsonplaceholder.typicode.com/users/" + user.id, user)
      .then((res) => {
        setUsers(users.map((u) => (u.id == user.id ? res.data : u)));
      });
  };

  return (
    <>
      {error && <p>{error}</p>}
      User: <input type="text" ref={nameRef} />
      <button onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map((user) => (
          <User user={user} onUpdateUser={updateUser}></User>
        ))}
      </ul>
    </>
  );
}
