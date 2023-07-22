import React from "react";
import ActiveLink from "./ActiveLink";
import logo from '../../assets/home/logo.png'
import Button from "../Button/Button";

const Navbar = () => {
  const navItems = (
    //                    
    <>
      <li>
        <ActiveLink to="/">Services</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/consult">Packages</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/training">Who We Are</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/discover">Our Protfolio </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">About Us</ActiveLink>
      </li>
  
    </>
  );
  return (
    <>
      <div className="navbar gradient-bg px-8 md:px-28">
        <div className="navbar-start md:w-1/3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="text-lg text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
              <div>
          <a className=""> <Button>
              contact
            </Button></a>
        </div>
            </ul>
          </div>
          <a className="normal-case text-xl">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-end w-full hidden lg:flex">
          <ul className="text-lg text-black menu menu-horizontal px-1 flex items-center">{navItems} <div>
          <a className="">
            <Button>
              contact
            </Button>
          </a>
        </div></ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
