import React, { useState } from "react";
import ListGroup from "./ListGroup";
import Card from "./Card";

export function HelloComponent() {
  const name = "ganesh kumar";
  const date = new Date();
  const hours = date.getHours();
  const imageUrl = "logo192.png";
  //const counter = 100;
  const products = [
    { id: 1, name: "Iphone" },
    { id: 2, name: "Dell" },
  ];
  const productHeading = "List of Products";

  // const output = useState(100);
  // const counter = output[0];
  // const setCounter = output[1];
  //console.log(output);

  const [counter, setCounter] = useState(100);
  const [username, setUsername] = useState("ganesh kumar");

  function handleIncrement() {
    //alert("increment called");
    //counter = counter + 1;
    setCounter(counter + 1);
    setUsername("ganesh k");
  }

  // function handleClick() {
  //   alert("button clicked");
  // }
  const handleClick = () => {
    alert("button clicked");
  };

  //   let message;
  //   if (hours < 13) message = "Good Morning";
  //   else message = "Good Evening";
  let message;
  if (hours < 13) message = <p>Good Morning</p>;
  else message = <p>Good Evening</p>;

  return (
    <>
      <h1>Hello {getDate()}</h1>
      {hours < 13 ? <p>Good Morning</p> : <p>Good Evening</p>}
      {message}
      {hours > 13 && <p>Good Evening</p>}
      <p>{username}</p>
      <div>
        <img src={imageUrl} />
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
      <button
        onClick={(event) => {
          console.log(event);
        }}
      >
        Get Event
      </button>
      <div>Counter: {counter}</div>
      <button onClick={handleIncrement}>Increment Counter</button>

      <ListGroup items={products} heading="List of Products"></ListGroup>

      <Card heading="Hello Card">
        <p>Hello Contet</p>
      </Card>
    </>
  );

  function getDate() {
    const date = new Date();
    return date.toString();
  }
}
