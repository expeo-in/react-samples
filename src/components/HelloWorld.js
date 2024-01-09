import { useState } from "react";
export default function HelloWorld(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Component using function</h1>
      <p>Props - {props.name}</p>
      <p>State - {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
