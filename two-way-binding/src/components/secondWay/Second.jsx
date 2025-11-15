import React from "react";
import { useState } from "react";

const Second = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="p-10 flex flex-col gap-4 w-50"
      >
        <input
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
          value={formData.username}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData.password}
          type="text"
          placeholder="password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Second;
