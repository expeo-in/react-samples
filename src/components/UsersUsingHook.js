import { useFetchUsers, useFetchData } from "../hooks/useFetchUsers";

export default function UsersUsingHook() {
  //const [users] = useFetchData("https://jsonplaceholder.typicode.com/users");
  const [todos] = useFetchData("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <h1>Using Custom Hooks</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
