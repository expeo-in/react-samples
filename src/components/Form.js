import { useState } from "react";

export default function RegisterForm() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "Name is required",
    age: "Age is required",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const handleChange = (event) => {
    console.log("input changed");

    if (event.target.name === "name") {
      let name = "";
      if (!event.target.value) name = "Name is required";
      else if (event.target.value.length < 3)
        name = "Name should be atleast 3 chars";

      setFormErrors({ ...formErrors, name: name });
    } else if (event.target.name === "age") {
      let age = "";
      if (!event.target.value) age = "Age is required";
      else if (event.target.value < 18) age = "Age must be greater than 18";

      setFormErrors({ ...formErrors, age: age });
    }

    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form className="col-6" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={user.name}
            autoComplete="off"
          ></input>
          {formErrors.name && (
            <div className="text-danger">{formErrors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            onChange={handleChange}
            value={user.age}
          ></input>
          {formErrors.age && (
            <div className="text-danger">{formErrors.age}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={formErrors.name || formErrors.age}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
