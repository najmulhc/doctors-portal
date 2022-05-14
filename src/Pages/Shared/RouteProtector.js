import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Login from "../Login/Login";

const RouteProtector = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation().pathname;
  console.log(location);
 
  if (user) {
    return children;
  } else {
    return <Login cameFrom={location}></Login>
  }
};
export default RouteProtector;
