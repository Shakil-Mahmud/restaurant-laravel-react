import React from "react";
import { NavLink } from "react-router-dom";
import { LOGO } from "../../Assets";
import { MENU, SIGN_IN, SIGN_UP  } from "../../Routes/path";

function Header() {
  return (
    <>
      <div className="flex flex-row shadow-sm w-full justify-between bg-white border-gray-200 px-2 sm:px-4 py-2.5 items-center mx-auto">
        <div className="flex flex-row h-10">
          <a
            href="/"
            className="flex flex-row items-center space-x-1 hover:cursor-pointer"
          >
            <img src={LOGO} alt={"logo"} className={"rounded  w-11 h-10"} />
            <span>Restaurant</span>
          </a>
        </div>

        <div className="flex flex-row space-x-6">
          <div className="flex flex-row ">
            <NavLink to={MENU}>Menu</NavLink>
          </div>
          <div className="flex flex-row ">Special Offer</div>
          <div className="flex flex-row ">Contact Us</div>
          <div className="flex flex-row ">About Us</div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="flex">
            <NavLink to={SIGN_IN}>SignIn</NavLink>
          </div>
          <div className="flex">
            <NavLink to={SIGN_UP}>SignUp</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
