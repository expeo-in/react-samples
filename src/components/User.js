import { useEffect, useState, useRef } from "react";

export default function User({ user, onUpdateUser }) {
  const [isEditing, setEditing] = useState(false);
  const [editedUser, setEditUser] = useState(-1);
  const [username, setUsername] = useState("");

  const editUser = (user) => {
    setEditing(true);
    setEditUser(user.id);
    setUsername(user.name);
  };

  const cancelUser = () => {
    setEditing(false);
    setEditUser(-1);
  };

  const displayUser = (user) => {
    let content = "";

    if (isEditing && editedUser === user.id) {
      content = (
        <>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={() => {
              setEditing(false);
              setEditUser(-1);
              onUpdateUser({ ...user, name: username });
            }}
          >
            Save
          </button>
          <button onClick={cancelUser}>Cancel</button>
        </>
      );
    } else {
      content = (
        <>
          {user.name}
          <button onClick={() => editUser(user)}>Edit</button>
        </>
      );
    }
    return content;
  };

  return (
    <>
      <li>{displayUser(user)}</li>
    </>
  );
}
