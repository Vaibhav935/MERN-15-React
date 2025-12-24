import React from "react";
import {useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setToggle } from "../features/toggleSlice";
import { setUser } from "../features/authSlice";


const Login = () => {
    const navigate = useNavigate();
    const {register, handleSubmit,reset, formState={errors}} = useForm()

    const dispatch =  useDispatch()

    const regUsers = JSON.parse(localStorage.getItem("reg users"))

    const loginSubmit = (data)=> {
        const exist = regUsers.find(val => val.username === data.username)
        if(exist){
            alert("User Logged In")
            localStorage.setItem("log user", JSON.stringify(exist))
            dispatch(setUser(exist))
            navigate("/home")
        }
        else{
            alert("User Not found")
        }
        reset()
    }

  return (
    <div className="flex justify-center items-center h-screen bg-stone-300 ">
      <form 
      onSubmit={handleSubmit(loginSubmit)}
      className=" h-100 rounded-4xl shadow-2xl w-80 p-5 flex flex-col justify-between bg-gray-200 ">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <div className="flex flex-col gap-6">
          <input
          {...register("username")}
            className="outline-none border px-4 py-1.5 rounded-full "
            type="text"
            placeholder="Username"
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
            Login
          </button>
          <p className="text-xs">
            Don't have an account{" "}
            <span
              onClick={() => dispatch(setToggle(true))}
              className="text-blue-500 cursor-pointer"
            >
              Register here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
