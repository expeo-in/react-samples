import { memo } from "react";

function ToDos({ todos, addToDo }) {
  console.log("todos rendering");
  return (
    <>
      <h3>Todos Component</h3>
      <div>
        {/* <input type="text" onChange={(e) => setToDo(e.target.value)}></input> */}
        <button onClick={addToDo}>Add todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}

//export default memo(ToDos);
