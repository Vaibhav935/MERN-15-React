import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { MyStore } from "../context/ContextProvider";

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedInUser, loggedInUser, registeredUsers, setAuthToggle } =
    useContext(MyStore);
  console.log(loggedInUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const formData = (data) => {
    const foundUser = registeredUsers.find((user) => user.email === data.email);

    if (!foundUser) {
      alert("User does not exist Register first");
      reset();
      setAuthToggle((prev) => !prev);
      return;
    }
    if (foundUser.password !== data.password) {
      alert("wrong password");
      reset();
      return;
    }

    setLoggedInUser(foundUser);
    localStorage.setItem("LoggedInUser", JSON.stringify(foundUser));

    // setLoggedInUser(foundUser.username)
    navigate("/");
  };

  return (
    <div className="flex items-center h-screen justify-center bg-[#E9F4EA]">
      <form
        onSubmit={handleSubmit(formData)}
        className="flex flex-col px-5 py-10 shadow-[3px_3px_6px_rgba(0,0,0,0.5)] bg-[#ECF6EE] gap-7 justify-between rounded-2xl w-[400px] h-[450px]"
      >
        <h1 className=" font-semibold text-2xl ">Welcome Back!</h1>
        <div className="w-full flex gap-7 flex-col ">
          <input
            {...register("email")}
            className="border px-2 py-1 rounded outline-none "
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            {...register("password")}
            className="border px-2 py-1 rounded outline-none "
            type="password"
            placeholder="Enter your password"
            required
          />

          <p className="text-xs ">
            Don't have an Account?{" "}
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
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
