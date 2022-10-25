import React, {useState} from "react";
import womanpic from "../assets/WomanPic.png"


export default function Registration({onLogin}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");
  const [created, setCreated] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setCreated(true);
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
       
      }),
    }).then((r) => r.json())
    .then((response) => {
      if (response.status === 'created') {
        setCreated(true);
        setErrors('');
      }
    }).catch((response) =>
      setErrors(
        "Make sure your server is running!"
      )
    );
  }

  return (
    <div className="">
      <div className="flex flex-row items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="sm:max-w-md mr-10 ">
          <a href="/">
            <h3 className="text-8xl font-bold text-black-600">Poverty-</h3>
            {/* <img src={line}/> */}

            <h3 className="text-8xl text-end font-bold text-green-600">Line</h3>
          </a>
          <img src={womanpic} alt="/"/>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-lg sm:max-w-sm sm:rounded-lg">
        <a href="/">
            <h3 className="text-3xl font-bold text-green-600">Register</h3>
          </a>
          <form className="register-form mt-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Full Names
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" Name"
                  id="name"

                  className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Username
              </label>
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder=" Username"
                  id="username"

                  className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="✉️ Email"
                  id="email"

                  className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="🔓 Password"
                  id="password"

                  className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="🔓 Confirm Password"
                  autoComplete="current-password"
                  className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <a href="/" className="text-xs text-green-600 hover:underline">
              Forget Password?
            </a>
            <div className="flex items-center mt-4">
              <button type="submit" className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <a className="text-green-600 hover:underline" href="/login">
                Log in
              </a>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 "
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="text-green-600">Login with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
