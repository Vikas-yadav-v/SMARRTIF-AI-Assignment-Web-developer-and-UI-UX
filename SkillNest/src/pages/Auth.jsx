import React from "react";
import { useState } from "react";
import axios from "axios";
import Login from "./Login";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    console.log(e.target.value, e.target.name);
    if (e.target.value) {
      setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData, "userData");
    axios
      .post("http://localhost:5000/api/auth/register", userData)
      .then((res) => console.log(res, "--------------"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        {!isLogin ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <input
              className="w-full border p-2 mb-3 rounded"
              placeholder="Name"
              name="name"
              onChange={onChangeHandler}
            />

            <input
              className="w-full border p-2 mb-3 rounded"
              placeholder="Email"
              name="email"
              onChange={onChangeHandler}
            />

            <input
              className="w-full border p-2 mb-3 rounded"
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
            />

            <button
              onClick={onSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </>
        ) : (
          <Login />
        )}

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer ml-2 font-semibold"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
