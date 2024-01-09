import { useState } from "react";

const counter1Data = [1, "ganesh1", "kumar1"];

export default function Counter() {
  console.log("rendering counter");

  const [counter, setCounter] = useState(0); //counterData1[0]
  const [firstName, setFirstName] = useState("ganesh"); //counterData[1]
  const [lastName, setLastName] = useState("kumar"); //counterData[2]
  const [msg, setMsg] = useState("");

  const [person, setPerson] = useState({
    firstName: "ganesh",
    lastName: "kumar",
  });

  const handleClick = () => {
    //counter++;
    setCounter(counter + 1);
    setFirstName(firstName + counter);
    setLastName(lastName + counter);
    console.log(counter);
  };

  return (
    <>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button onClick={handleClick}>Increment</button>
      {/* <p>
        FirstName - {firstName} {lastName}
      </p>
      <p>LastName - {lastName}</p>
      
      <div>
        <input type="text" onChange={(e) => setMsg(e.target.value)}></input>
      </div>
      <div>{msg}</div> */}
    </>
  );
}
