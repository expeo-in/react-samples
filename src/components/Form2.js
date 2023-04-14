import { useForm } from "react-hook-form";

export default function Form2() {
  const form = useForm();
  console.log(form);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;
  //const formState = form.formState;
  //const errors = formState.errors;

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="col-6" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            autoComplete="off"
            {...register("name", { required: true, minLength: 3 })}
          ></input>
          <div>Minium 3 chars</div>
          {errors.name?.type === "required" && (
            <div className="text-danger">Name is required</div>
          )}
          {errors.name?.type === "minLength" && (
            <div className="text-danger">Name should be min 3 chars</div>
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
            {...register("age", { required: true, min: 18 })}
          ></input>
          {errors.age?.type === "required" && (
            <div className="text-danger">Age is required</div>
          )}
          {errors.age?.type === "min" && (
            <div className="text-danger">Age should be min 18</div>
          )}
        </div>
        <button type="submit" disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
