import React from "react";
import GoogleSignIn from "../Shared/GoogleSignIn";

const Login = () => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body w-full">
          <h2 class=" text-2xl font-bold text-black text-center">Login</h2>
          <form class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label mt-4">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="enter password here"
              class="input input-bordered w-full max-w-xs"
            />
            <GoogleSignIn/>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
