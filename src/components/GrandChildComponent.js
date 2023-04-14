import { useContext } from "react";
import { UserContext } from "./UserContext";
import TaskList from "./TaskList";

export default function GrandChildComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      Grand Child Component - {user.username} - {user.email}
      <TaskList></TaskList>
    </div>
  );
}
