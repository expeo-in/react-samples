export default function TasksReducerUsingImmer(tasks, action) {
  if (action.type === "added") {
    let count = tasks.length;
    const newTask = {
      id: ++count,
      title: action.title,
      done: false,
    };

    tasks.push(newTask);
  } else if (action.type === "updated") {
    //mutable way

    let task = tasks.find((task) => task.id === action.id);
    task.done = !task.done;
  } else if (action.type === "deleted") {
    let index = tasks.findIndex((task) => task.id === action.id);
    tasks.splice(index, 1);
  }
}
