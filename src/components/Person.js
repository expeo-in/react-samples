import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    name: "ganesh",
    age: 30,
    address: {
      city: "chennai",
      state: "tn",
      country: "india",
      zipCode: 1000,
    },
  });

  const [countries, setCountries] = useState(["India", "Pak", "Srilanka"]);

  //const [count, setCount] = useState(0);
  //const person = { name: "ganesh", age: 30 };

  const handleClick = () => {
    //will not work
    //person.age = 40;
    //setPerson(person)

    // const newPerson = {
    //   name: "ganesh",
    //   age: 40,
    // };
    //setPerson(newPerson);

    //spread operator to update object
    // const newPerson = {
    //   ...person,
    //   age: 40,
    //   address: {
    //     ...person.address,
    //     city: "bangalore",
    //   },
    // };

    // setPerson(newPerson);

    //add
    //countries.push("China");
    //const newcountries = ["India", "Pak", "Srilanka", "China"];
    //const newcountries = [...countries, "China"];

    //update
    const newcountries = countries.map((item) =>
      item === "Pak" ? "Pakistan" : item
    );

    //remove
    //const newcountries = countries.filter((item) => item !== "Srilanka");

    setCountries(newcountries);

    //setCount(count + 1);
  };

  return (
    <>
      {/* <h1>
        Hello {person.name} - {person.age} - {person.address.city}
      </h1> */}

      <div>
        <span>Name: {person.name}</span>
        <span>Age: {person.age}</span>
        <span>City: {person.address.city}</span>
      </div>
      <ul>
        {countries.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
