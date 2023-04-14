import { useEffect, useState } from "react";

export default function SideEffect(props) {
  //console.log("before rendering comp");
  //console.log(props.name);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.getElementById("age").focus();
    console.log("effect1", props.name);
    //setCount(count + 1);
  }, [props.name]);

  useEffect(() => {
    console.log("effect2", props.date);
  });

  return (
    <>
      Count: {count}
      <form>
        Name: <input id="name" type="text"></input>
        Age: <input type="text" id="age" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
