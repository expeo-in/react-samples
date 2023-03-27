import logo from "./logo.svg";
import ListGroup from "./ListGroup";
import { HelloComponent } from "./Hello";
import Card from "./Card";
import "./App.css";
import BootstrapCard from "./components/BootstrapCard/BootstrapCard";
import BootstrapCardContent from "./components/BootstrapCard/BootstrapContent";
import BootstrapCardAction from "./components/BootstrapCard/BootstrapCardAction";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Like from "./components/Like/Like";
import Counter from "./components/Counter";
import Message from "./components/Message";
import Person from "./components/Person";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useState } from "react";
import RegisterForm from "./components/Form";
import Form2 from "./components/Form2";

function App() {
  const [qty, setQty] = useState(0);

  const handleAddMore = () => {
    setQty(qty + 1);
  };

  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "Pak" },
    { id: 3, name: "SL" },
    { id: 4, name: "China" },
  ];

  const cities = [
    { id: 1, name: "chennai" },
    { id: 2, name: "bangalore" },
    { id: 3, name: "hyderabad" },
    { id: 4, name: "delhi" },
  ];

  const handleCountryClick = function (item) {
    alert(item.name);
  };

  const handleCityClick = function (item) {
    alert(item.id + "-" + item.name);
  };

  return (
    <>
      <Form2></Form2>
      {/* 
      <RegisterForm></RegisterForm>
      <Navbar qty={qty}></Navbar>
      <Cart qty={qty} onAddMore={handleAddMore}></Cart>
      <Person></Person>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <ListGroup
        items={countries}
        heading="Countries"
        onItemClick={handleCountryClick}
      />
      <Counter></Counter>
      <Counter></Counter>
      <Like></Like>
      <BsFillCalendarDateFill
        color="orange"
        size="100"
      ></BsFillCalendarDateFill>
      <BootstrapCard heading="My Card">
        <BootstrapCardContent>Content goes here</BootstrapCardContent>
        <BootstrapCardAction>
          <button>Action 1</button>
          <button>Action 2</button>
        </BootstrapCardAction>
      </BootstrapCard> */}
      {/* <BootstrapCard heading="Card Heading" actionText="more">
        Card Content
      </BootstrapCard>
      <br />
      <BootstrapCard heading="Card Heading 2" actionText="details">
        Card Content 2
      </BootstrapCard> */}
      {/* <Card
        heading="My Card 1 Heading"
        onDetailClick={() => alert("detail clicked")}
      >
        <p>card content para 1</p>
        <p>card content para 2</p>
      </Card>

      <hr></hr>
      
      <hr />
      <ListGroup
        items={cities}
        heading="Cities"
        onItemClick={handleCityClick}
      />
      <HelloComponent></HelloComponent> */}
    </>
  );
}

export default App;
