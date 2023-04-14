import { useState, useReducer, useContext } from "react";
import { useImmerReducer } from "use-immer";
import TasksReducer from "./TaskReducer";
import TasksReducerUsingImmer from "./TasksReducerUsingImmer";
import { TasksContext } from "../TaskContext";

let next = 0;

export default function TaskList() {
  // const initialTasks = [
  //   {
  //     id: 1,
  //     title: "Buy Groceries",
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Read React",
  //     done: true,
  //   },
  // ];
  const initialTasks = useContext(TasksContext);
  // const [tasks, setTasks] = useState(initialTasks);
  //const [tasks, dispatch] = useReducer(TasksReducer, initialTasks);
  const [tasks, dispatch] = useImmerReducer(
    TasksReducerUsingImmer,
    initialTasks
  );

  const [taskTitle, setTaskTitle] = useState("");

  const addTask = () => {
    dispatch({
      type: "added",
      title: taskTitle,
    });
    // let count = tasks.length;
    // const newTask = {
    //   id: ++count,
    //   title: taskTitle,
    //   done: false,
    // };
    // setTasks([newTask, ...tasks]);
    // setTaskTitle("");
  };

  const deleteTask = (id) => {
    dispatch({ type: "deleted", id: id });
    // setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    dispatch({ type: "updated", id: id });
    // let task = tasks.find(task => task.id === id);
    // task.done = !task.done
    // setTasks(
    //   tasks.map((task) => {
    //     if (task.id === id) {
    //       task.done = !task.done;
    //       return task;
    //     } else return task;
    //   })
    // );
  };

  return (
    <>
      <h1>Task Lists</h1>

      {/* Add Task Logic */}
      <input
        type="text"
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
      ></input>
      <button type="button" onClick={addTask}>
        Add Task
      </button>

      {/* Rendering Task Logic */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => updateTask(task.id)}
            ></input>

            {task.title}

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
