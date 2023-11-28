import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { calculateTotal } from "../redux/features/cartSlice";

function Navbar() {
  const { items, totalAmount, totalSum } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [items]);

  const location = useLocation();

  return (
    <>
      <div className="navbar text-4xl flex justify-end mr-12 mt-2 ">
        {location.pathname != "/" && <NavLink to="">Products</NavLink>}
        <NavLink
          className="ml-2 mr-1 bg-green-800 px-2 rounded text-white"
          to="cart"
        >
          Cart
        </NavLink>
        {totalAmount > 0 && (
          <div className="flex justify-center items-center rounded-md font-bold text-white text-xs w-6 h-5 text-center bg-black">
            <span>{totalAmount}</span>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
