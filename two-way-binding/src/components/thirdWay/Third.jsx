import React from "react";
import { useState } from "react";

const Third = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="p-10 flex flex-col gap-4 w-50"
      >
        <input
          onChange={handleChange}
          value={formData.name}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          value={formData.username}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onChange={handleChange}
          value={formData.password}
          name="password"
          type="text"
          placeholder="password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Third;
