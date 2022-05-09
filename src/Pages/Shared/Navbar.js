import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/" class="hover:btn-accent">Home</Link>
      </li>

      <li>
        <Link to="/" class="hover:btn-accent">About Us</Link>
      </li>
      <li>
        <Link to="/" class="hover:btn-accent">Appointment</Link>
      </li>
      <li>
        <Link to="/" class="hover:btn-accent">Reviews</Link>
      </li>
      <li>
        <Link to="/" class="hover:btn-accent">Contact</Link>
      </li>
      <li>
        <Link to="/" class="hover:btn-accent">Login</Link>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div class="navbar bg-white">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link to="/" class="btn btn-ghost normal-case font-bold text-xl">Doctors Portal</Link>
          </div>
          <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal p-0">{links} </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
