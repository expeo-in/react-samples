import { useState, useMemo, useCallback } from "react";
import ToDo from "./ToDo";

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [todos, setToDos] = useState(["1", "2", "3"]);
  const output = useMemo(() => expensiveCalculation(count), [count]);
  //const output = expensiveCalculation(count);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const addToDo = useCallback(() => {
    setToDos([...todos, "New To Do"]);
  }, [todos]);

  return (
    <>
      <p>
        Count is {count} - {output}
      </p>
      <button onClick={handleIncrement}>Increment Counter</button>

      <hr></hr>
      <ToDo todos={todos} addToDo={addToDo}></ToDo>
    </>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 2000000000; i++) {
    num += 1;
  }
  return num;
};
