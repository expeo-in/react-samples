import { useState } from "react";
import AddToDo from "./AddToDo";

export default function ToDoList() {
  const [todos, setToDos] = useState([
    { id: 1, title: "Buy Veg" },
    { id: 2, title: "Clean Home" },
  ]);

  const handleAdd = (todo) => {
    setToDos([...todos, { id: new Date().getTime(), title: todo }]);
  };

  return (
    <>
      <h1>Todos</h1>
      <AddToDo onAdd={handleAdd}></AddToDo>
      {todos.length == 0 && <h2>No records found</h2>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
