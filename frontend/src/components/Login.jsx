import React from "react";
import picsignup from "../assets/signup.png"

export default function Login() {
  return (
    <div className="flex flex-row items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="sm:max-w-md mr-10 ">
        <a href="/">
          <h3 className="text-8xl font-bold text-green-600">Poverty-</h3>
          {/* <img src={line} alt="/" /> */}

          <h3 className="text-8xl text-end font-bold text-green-600">Line</h3>
        </a>
        <img src={picsignup} alt="/" />
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-lg sm:max-w-sm sm:rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline">
          Log in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="/" className="text-xs text-green-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="/" className="font-medium text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
