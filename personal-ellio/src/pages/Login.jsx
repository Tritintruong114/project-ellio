import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-full p-3 flex items-center justify-center">
      <div className="w-3/4 bg-slate-200 rounded-xl p-3  h-screen flex items-center justify-center flex-col gap-3">
        <div>
          <h1 className="text-xl font-bold">Login</h1>
        </div>
        <div className=" flex flex-col gap-3 w-3/4 sm:w-3/4 md:w-1/2 xl:w-1/4">
          <input
            className="rounded-xl pl-3 py-1 focus:outline-none"
            type="text"
            placeholder="User name"
          ></input>
          <input
            className="rounded-xl pl-3 py-1 focus:outline-none"
            type="password"
            placeholder="Password"
          ></input>
          <button className="text-blue-600 text-sm">Forgot password ?</button>
        </div>
        <div className="flex flex-col gap-3 w-3/4 md:w-1/2 xl:w-1/4">
          <button className="xl:text-md text-xs md:text-sm py-2 bg-white text-black font-medium rounded-xl px-6">
            Sign in
          </button>
          <button className="xl:text-md gap-1 flex items-center justify-center relative text-xs md:text-sm py-1 bg-white text-black  font-medium rounded-xl px-6">
            <img
              className=" w-8 h-8 object-cover sm:relative "
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            ></img>
            Sign in with Google
          </button>
        </div>
        <div>
          <Link>
            <h1 className="text-sm opacity-60 hover:text-blue-500 ">
              Create a account?
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
