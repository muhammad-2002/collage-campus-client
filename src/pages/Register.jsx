import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../components/hook/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginEmailPassword, setUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    const userData = {
      email,
      displayName: username,
      photoURL: "",
      address: "",
      university: "",
    };
    loginEmailPassword(email, password)
      .then(async (userCredential) => {
        try {
          const res = await fetch(`http://localhost:5000/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData), // Convert data to JSON string
          });

          // Check if response is okay before parsing JSON
          if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
          }

          const data = await res.json(); // Parse the JSON response
          console.log(data);

          navigate(location?.state ? location?.state : "/");
        } catch (error) {
          console.error("Fetch Error:", error.message);
        }
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
      });
  };
  return (
    <div className="w-full max-w-md p-8 space-y-3 mx-auto my-10 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit} action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label
            htmlFor="email"
            className="block text-gray-400 dark:text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 border-[2px] border-white rounded-md  dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="email"
            className="block text-gray-400 dark:text-gray-600"
          >
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 border-[2px] border-white rounded-md  dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="password"
            className="block text-gray-400 dark:text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-[2px] border-white dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-violet-400 dark:bg-violet-600">
          Register
        </button>
      </form>

      <p className="text-xs text-center sm:px-6 text-gray-400 dark:text-gray-600">
        already have an account?
        <Link
          to="/login"
          rel="noopener noreferrer"
          href="#"
          className="underline text-gray-100 dark:text-gray-800"
        >
          login
        </Link>
      </p>
    </div>
  );
};

export default Register;
