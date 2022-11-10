import React from "react";
import { LOGO } from "../../Assets";

function Header() {
  return (
    <>
      <div className="flex flex-row shadow-sm w-full justify-between bg-white border-gray-200 px-2 sm:px-4 py-2.5 items-center mx-auto">
        <div className="flex flex-row h-10">
          <a href="/" className="flex flex-row items-center space-x-1 hover:cursor-pointer">
            <img src={LOGO} className={"rounded  w-11 h-10"} />
            <span>Restaurant</span>
          </a>
        </div>

        <div className="flex flex-row space-x-6">
          <div className="flex flex-row ">Our Menu</div>
          <div className="flex flex-row ">Special Offer</div>
          <div className="flex flex-row ">Contact Us</div>
          <div className="flex flex-row ">About Us</div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="flex">Login/cart</div>
          <div className="flex">signup/profile</div>
        </div>
      </div>
    </>
  );
}

export default Header;
