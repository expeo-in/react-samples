import { useRef } from "react";

export default function Form4() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const hanldeSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(ageRef.current.value);
    //console.log(nameRef.current.value);
  };

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        Name: <input id="name" type="text" ref={nameRef}></input>
        Age: <input type="text" ref={ageRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
