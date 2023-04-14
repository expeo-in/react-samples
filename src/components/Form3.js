import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Form3() {
  const schema = yup
    .object({
      name: yup.string().required(),
      age: yup.number().positive().integer().required().min(18),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form className="col-6" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name")}
          ></input>
          <p class="text-danger">{errors.name?.message}</p>
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
            {...register("age")}
          ></input>
          <p class="text-danger">{errors.age?.message}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
