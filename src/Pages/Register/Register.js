import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoogleSignIn from "../Shared/GoogleSignIn";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { InfinitySpin } from "react-loader-spinner";
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, confirmedPassword } = data;
    console.log(data);
    if (password !== confirmedPassword) {
      toast.error("passwords did not matched!")
    }else{
        createUserWithEmailAndPassword(email, password);
    }
  };
  if(user.user){
      toast.success("user created!");
  }
  if(loading){
      return (
          <div className="min-h-screen flex items-center justify-center">
              <InfinitySpin color="#19D3AE" />
          </div>
      )
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
              {...register("password", { required: true })}
            />
            <label class="label mt-4">
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
