import { useState } from "react";

export default function AddToDo({ onAdd }) {
  const [todo, setToDo] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setToDo(e.target.value)}
        value={todo}
      ></input>
      <button
        onClick={() => {
          onAdd(todo);
          setToDo("");
        }}
      >
        Add
      </button>
    </div>
  );
}
