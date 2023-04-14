export default function TasksReducer(tasks, action) {
  if (action.type === "added") {
    let count = tasks.length;
    const newTask = {
      id: ++count,
      title: action.title,
      done: false,
    };

    //mutable way
    //tasks.push(newTask);

    //immutable way
    //return [newTask, ...tasks];
  } else if (action.type === "updated") {
    //mutable way
    // let task = tasks.find((task) => task.id === action.id);
    // task.done = !done;

    //immutable way
    return tasks.map((task) => {
      if (task.id === action.id) {
        task.done = !task.done;
        return task;
      } else return task;
    });
  } else if (action.type === "deleted") {
    return tasks.filter((task) => task.id !== action.id);
  }
}
