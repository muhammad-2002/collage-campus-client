import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuth } from "../hook/useAuth";

const Navbar = () => {
  const { user, logOut, googleProvider } = useAuth();
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    try {
      const GetData = async () => {
        const res = await axios.get(
          `http://localhost:5000/user/${user?.email}`
        );
        setDataUser(res.data);
      };
      GetData();
    } catch (err) {
      console.log(err);
    }
  }, [dataUser, user.email]);
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
              : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"collage"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
              : "text-black"
          }
        >
          Collages
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/admission"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
              : "text-black"
          }
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-collage"}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
              : "text-black"
          }
        >
          My Collages
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-xl fixed z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul> */}
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl w-[120px] h-[60px]">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        <div>
          {dataUser && (
            <Link to="/user-profile" className="font-bold">
              {dataUser?.displayName}
            </Link>
          )}
        </div>
        {!user ? (
          <Link
            to={"/login"}
            href="#_"
            class="relative px-5 py-2 font-medium text-white group"
          >
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span class="relative">Login</span>
          </Link>
        ) : (
          <div
            onClick={() => logOut()}
            class="relative px-5 py-2 font-medium cursor-pointer text-white group"
          >
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span class="relative">Logout</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
