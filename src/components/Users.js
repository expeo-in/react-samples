import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParms] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "name";
  const sortOrder = searchParams.get("sortOrder") || "asc";

  useEffect(() => {
    //const controller = new AbortController();
    setLoading(true);
    const userService = new UserService();

    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   signal: controller.signal,
    // })
    userService
      .getAllUsers()
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Loading data failed");
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // return () => {
    //   controller.abort();
    // };
  }, []);

  const handleDelete = (id) => {
    const originalUsers = [...users];

    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) return res.json();
        else throw "delete failed";
      })
      .then((data) => {
        console.log(data);
        setUsers(users.filter((u) => u.id !== id));
      })
      .catch((err) => {
        alert("Delete failed");
        //setUsers(originalUsers);
      });
  };

  const handleAdd = () => {
    const newUser = {
      id: 0,
      name: "Ganesh kumar",
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        newUser.id = data.id;
        setUsers([newUser, ...users]);
      });
  };

  const handleUpdate = (id) => {
    const user = users.find((u) => u.id === id);
    const updateUser = { ...user };
    updateUser.name += " changed";

    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "PATCH",
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const usersCopy = users.map((u) => (u.id === id ? data : u));
        setUsers(usersCopy);
      });
  };

  return (
    <>
      {isLoading && <div class="spinner-border"></div>}
      {error && <p>{error}</p>}
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
      <ul className="list-group">
        {users
          .sort((a, b) =>
            sortOrder === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
          )
          .map((u) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={u.id}
            >
              <Link to={"/users/" + u.name + "/" + u.id}>
                {u.id} - {u.name}
              </Link>
              <div>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => {
                    handleUpdate(u.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => {
                    handleDelete(u.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
      <Outlet></Outlet>
    </>
  );
}
