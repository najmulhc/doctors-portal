import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const signInGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      <button className="w-full btn btn-accent" onClick={signInGoogle}>
        Continue with Google
      </button>
    </div>
  );
};
export default GoogleSignIn;
