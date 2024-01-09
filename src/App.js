import Greet from "./components/Greet";
import UsersAsync from "./components/UsersAsync";
import Counter from "./components/Counter";
import Card from "./Card";
import UsersUsingAxios from "./components/UsersUsingAxios";
import ToDoList from "./components/ToDoList";
import SampleComponent from "./components/SampleComponent";
import HelloWorld from "./components/HelloWorld";

export default function App() {
  const handleCardClick = () => {
    alert("card detail clicked");
  };
  return (
    <>
      <h1>React App</h1>
      <hr></hr>
      <Counter></Counter>
      <hr></hr>
      <ToDoList></ToDoList>
      <hr></hr>
      <SampleComponent name="ganesh"></SampleComponent>
      <hr></hr>
      <HelloWorld name="ganesh"></HelloWorld>
      {/* <UsersAsync></UsersAsync>
       */}
      {/* <Greet name="ganesh"></Greet> */}
      {/* <Card heading="Product card" onDetailClick={handleCardClick}>
        Product card details
      </Card> */}
      {/* <UsersUsingAxios></UsersUsingAxios> */}
    </>
  );
}
