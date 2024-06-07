import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { adding } from "../../context/actions";

function Navbar() {
  // const userCount = useSelector((state) => state.adding.value).length;
  return (
    <div className="navbar">
      <h2>Redux</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>All users</NavLink>
    </div>
  );
}

export default Navbar;
