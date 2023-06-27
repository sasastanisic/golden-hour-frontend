import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

const Registration = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    surname: "",
    age: "",
    email: "",
    username: "",
    password: "",
    confirmedPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const register = async (event) => {
    event.preventDefault();

    try {
      const response = await UserService.register(user);
      console.log(response);
      alert("Registration was successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const resetFields = (event) => {
    event.preventDefault();

    setUser({
      id: "",
      name: "",
      surname: "",
      age: "",
      email: "",
      username: "",
      password: "",
      confirmedPassword: "",
    });
  };

  return (
    <div className="flex items-center bg-slate-200 justify-center max-w-xl mx-auto mt-10 mb-10 shadow border-b rounded-lg">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider text-center">
          <h2>Register</h2>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2"
            autoComplete="off"
            required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Surname
          </label>
          <input
            type="text"
            name="surname"
            value={user.surname}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2"
            autoComplete="off"
            required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Age</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2"
            autoComplete="off"
            required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2"
            autoComplete="off"
            required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2"
            autoComplete="off"
            required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2"
            autoComplete="off"
            required
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmedPassword"
            value={user.confirmedPassword}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2"
            autoComplete="off"
            required
          />
        </div>
        <div className="flex items-center justify-center h-14 w-full mt-7 space-x-10 pt-4">
          <button
            onClick={register}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-6 transition duration-300 ease-in-out"
          >
            Register
          </button>
          <button
            onClick={resetFields}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-6 transition duration-300 ease-in-out"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
