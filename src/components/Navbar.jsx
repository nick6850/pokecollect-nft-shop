import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink to="">Products</NavLink>
      <NavLink to="cart">Cart</NavLink>
      <Outlet />
    </>
  );
}

export default Navbar;
