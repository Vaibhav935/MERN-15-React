import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/ContextProvider";
import { toast } from "react-toastify";
import { Navigate } from "react-router";

const Register = ({ setToggle }) => {
  const { registeredUsers, setregisteredUsers, setAuthToggle } =
    useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // localStorage.clear();
  const formData = (data) => {
    const updatedUsers = [...registeredUsers, data];
    setregisteredUsers(updatedUsers);
    console.log(updatedUsers);
    localStorage.setItem("Registered Users", JSON.stringify(updatedUsers));
    toast.success("User Registered");
    setAuthToggle((prev) => !prev);
    reset();
  };

  return (
    <div className="flex items-center h-screen justify-center bg-[#E9F4EA]">
      <form
        onSubmit={handleSubmit(formData)}
        className="flex flex-col px-5 py-10 shadow-[3px_3px_6px_rgba(0,0,0,0.5)] bg-[#ECF6EE] gap-7 justify-between rounded-2xl w-[400px] h-[450px]"
      >
        <h1 className=" font-semibold text-2xl ">Register Here</h1>
        <div className="w-full flex gap-7 flex-col ">
          <input
            {...register("username", { required: true })}
            className="border px-2 py-1 rounded outline-none "
            type="text"
            placeholder="Enter your Username"
          />
          <input
            {...register("email", { required: true })}
            className="border px-2 py-1 rounded outline-none "
            type="email"
            placeholder="Enter your email"
          />
          <input
            {...register("password", { required: true })}
            className="border px-2 py-1 rounded outline-none "
            type="password"
            placeholder="Enter your password"
          />

          <p className="text-xs ">
            Already have an Account?{" "}
            <span
              onClick={() => setAuthToggle((prev) => !prev)}
              className="text-blue-400 cursor-pointer "
            >
              click here
            </span>
          </p>
        </div>
        <input
          className="bg-blue-400 cursor-pointer py-1 rounded text-white text-xl  "
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default Register;
