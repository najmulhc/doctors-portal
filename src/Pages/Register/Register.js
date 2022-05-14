import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoogleSignIn from "../Shared/GoogleSignIn";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [aUser] = useAuthState(auth)
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
  const [userData, setUserData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setUserData(data);
    const { email, password, confirmedPassword } = data;
    if (password !== confirmedPassword) {
      toast.error("passwords did not matched!");
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };
  const updateUserName = async (data) => {
    const { displayName } = data;
    updateProfile({ displayName });
  };
  useEffect(() => {
    if (user?.user) {
      updateUserName(userData);
    }
  }, [user]);
  if (updateerror) {
    console.log(updateerror);
  }
  useEffect(() => {
    if (aUser ) {
      console.log(aUser)
      toast.success("User created");
      navigate("/");
    }
   
  }, [aUser]);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <InfinitySpin color="#19D3AE" />
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body w-full">
          <h2 class=" text-2xl font-bold text-accent text-center">Register</h2>
          <form
            class="form-control w-full max-w-xs"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label class="label">
              <span class="label-text">Your name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              {...register("displayName", { required: true })}
            />
            <label class="label">
              <span class="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
            <label class="label mt-4">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="enter password here"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                minLength: {
                  value: 7,
                  message: "password should have  to be 7 characters long", // JS only: <p>error message</p> TS only support string
                },
                pattern: {
                  value: /[A-Z]/,
                  message: "You need to have at least one capital letter",
                },
                pattern: {
                  value: /[a-z]/,
                  message: "You need to have at least one small letter",
                },
                pattern: {
                  value: /[0-9]/,
                  message: "You need to have at least one number",
                },

                required: {
                  value: true,
                  message: "You must have to put a password",
                },
              })}
            />
            <label className="label">
              <span className="label-text text-red-600">
                {errors?.password?.message}
              </span>
            </label>
            <label class="label ">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="please reconfirm your password"
              class="input input-bordered w-full max-w-xs"
              {...register("confirmedPassword", { required: true })}
            />

            <p className="text-center text-black text-sm">
              Already registered?{" "}
              <Link to="/login" className="text-accent">
                {" "}
                login here
              </Link>{" "}
            </p>
            <button
              className="w-full btn bg-white text-accent border border-accent mt-4 hover:text-white"
              type="submit"
            >
              register
            </button>

            <GoogleSignIn />
          </form>
        </div>
      </div>
    </main>
  );
};
export default Register;
