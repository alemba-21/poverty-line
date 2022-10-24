import React, {useState} from "react";
import picsignup from "../assets/signup.png"
import {Link} from 'react-router-dom'


export default function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="flex flex-row items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="sm:max-w-md mr-10 ">
        <a href="/">
          <h3 className="text-8xl font-bold text-black-600">Poverty-</h3>
          {/* <img src={line} alt="/" /> */}

          <h3 className="text-8xl text-end font-bold text-green-600">Line</h3>
        </a>
        <img src={picsignup} alt="/" />
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-lg sm:max-w-sm sm:rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline">
          Log in
        </h1>
        <form className="login-form mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             type="email"
             placeholder="Email"
             id="email"
             name="email"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="/" className="text-xs text-green-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
          <Link to="/profile">
            <button type="submit"
            className=" formButton w-full px-4 py-2 tracking-wide text-black
             transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </Link>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-green-600 hover:underline">
          Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
