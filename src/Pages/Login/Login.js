import React from "react";
import GoogleSignIn from "../Shared/GoogleSignIn";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = ({cameFrom}) => {
  console.log(cameFrom);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
  }
  if(user){
     if(cameFrom){
       navigate(cameFrom);
     } else{
       navigate('/')
     }
  }
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body w-full">
          <h2 class=" text-2xl font-bold text-accent text-center">Login</h2>
          <form class="form-control w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
            <label class="label">
              <span class="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              {...register("email", {required:true})}
            />
            <label class="label mt-4">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="enter password here"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {required: true})}
            />
              <p className="text-center text-black text-sm">
              New to Doctors Portal?{" "}
              <Link to="/register" className="text-accent">
                {" "}
                register here
              </Link>{" "}
            </p>
            <button className="w-full btn bg-white text-accent border border-accent mt-4 hover:text-white" type="submit">
             Login
            </button>
            <GoogleSignIn />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
