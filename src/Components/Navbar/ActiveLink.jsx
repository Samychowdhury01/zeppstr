import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-2 border-[#E71D36] outline-none rounded-none font-bold"
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
