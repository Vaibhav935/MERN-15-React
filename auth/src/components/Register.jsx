import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name , value } = e.target;
    setFormData({...formData, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newArr = [...userData, ]

  }

  return (
    <div className="h-screen flex items-center pl-35">
      <form className="h-[500px] w-[350px] bg-gray-900 rounded-2xl text-white flex flex-col justify-evenly items-center"
      onSubmit={onSubmit}
      >
        <h1 className="font-semibold text-2xl ">REGISTER</h1>
        <input
          className="w-[80%] text-white border p-2 rounded outline-none font-lg"
          type="text"
          placeholder="full name"
          onChange={handleChange}
        />
        <input
          className="w-[80%] text-white border p-2 rounded outline-none font-lg"
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          className="w-[80%] text-white border p-2 rounded outline-none font-lg"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="bg-blue-400 px-6 py-2 rounded-full text-xl flex items-center justify-center text-black cursor-pointer active:scale-95"
        type="submit"        
        >
          Register
        </button>
        <p>
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer font-semibold"
            onClick={() => setToggle((prev) => !prev)}
          >
            Login here
          </span>
        </p>
      </form>
      <div className="h-[90%] w-[600px] bg-gray-900 text-white ml-30 rounded-2xl p-5">
        <h1 className="text-center font-semibold text-2xl" 
        >
          Registered users:
        </h1>
      </div>
    </div>
  );
};

export default Register;
