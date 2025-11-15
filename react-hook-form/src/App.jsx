import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit(formData)}
        className="flex flex-col gap-3 w-50"
        action="#"
      >
        <input
          {...register("name", { required: true })}
          className="border outline-none"
          type="text"
          placeholder="Full Name"
        />
        {errors.name && errors.name.type === "required" ? (
          <p className="text-red-500 text-sm">Name is required</p>
        ) : null}
        <input
          {...register("username", { required: true })}
          className="border outline-none"
          type="text"
          placeholder="Username"
        />
        {errors.username && errors.username.type === "required" ? (
          <p className="text-red-500 text-sm">Username is required</p>
        ) : null}
        <input
          {...register("password", { required: true, minLength: 8 })}
          className="border outline-none"
          type="text"
          placeholder="Password"
        />
        {errors.password && errors.password.type === "required" ? (
          <p className="text-red-500 text-sm">Password is required</p>
        ) : errors.password && errors.password.type === "minLength" ? (
          <p className="text-red-500 text-sm">Minimum length should be 8</p>
        ) : null}
        <button
          className="bg-blue-500 max-w-max px-2 py-1 rounded text-white active:scale-95 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
