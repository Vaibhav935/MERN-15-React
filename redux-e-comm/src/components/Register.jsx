import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setToggle } from "../features/toggleSlice";

const Register = () => {
    const {register, handleSubmit, reset, formState={errors}} = useForm()
    const [rdata, setRdata] = useState(JSON.parse(localStorage.getItem("reg users")) || [])

    const dispatch = useDispatch()

    const registerSubmit = (data)=>{
        const arr = [...rdata, data]
        localStorage.setItem("reg users", JSON.stringify(arr))
        setRdata(arr)
        alert("User Registered")
        reset();
    }

  return (
    <div className="flex justify-center items-center h-screen bg-stone-300 ">
      <form 
      onSubmit={handleSubmit(registerSubmit)}
      className=" h-100 rounded-4xl shadow-2xl w-80 p-5 flex flex-col justify-between bg-gray-200 ">
        <h1 className="text-2xl font-semibold text-center">Register </h1>
        <div className="flex flex-col gap-6">
          <input
          {...register("username")}
            className="outline-none border px-4 py-1.5 rounded-full "
            type="text"
            placeholder="Username"
          />
          <input
          {...register("email")}
            className="outline-none border px-4 py-1.5 rounded-full "
            type="text"
            placeholder="Email"
          />
          <input
          {...register("password")}
            className="outline-none border px-4 py-1.5 rounded-full "
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-green-500 px-4 py-1.5 rounded-full text-white cursor-pointer w-full ">
            Register
          </button>
          <p className="text-xs">
            Already have an account{" "}
            <span
              onClick={() => dispatch(setToggle(false))}
              className="text-blue-500 cursor-pointer"
            >
              Login here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
