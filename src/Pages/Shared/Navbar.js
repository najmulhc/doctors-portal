import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () =>{
    signOut(auth);
  }
  const links = (
    <>
      <li>
        <Link to="/" className="hover:btn-accent">Home</Link>
      </li>

      <li>
        <Link to="/" className="hover:btn-accent">About Us</Link>
      </li>
      <li>
        <Link to="/appoinment" className="hover:btn-accent">Appointment</Link>
      </li>
      <li>
        <Link to="/" className="hover:btn-accent">Reviews</Link>
      </li>
      <li>
        <Link to="/" className="hover:btn-accent">Contact</Link>
      </li>
      <li>
        {user? <button className="hover:btn-accent" onClick={logOut}>{user.displayName} (Log Out)</button>:<Link to="/login" className="hover:btn-accent">Log In</Link>}
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="navbar bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case font-bold text-xl">Doctors Portal</Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{links} </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
