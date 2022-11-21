import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LOGO } from "../../Assets";
import { ALL_CATEGORIES, API_URL } from "../../Routes/apiUrls";
import { ABOUT_US, CONTACT_US, MENU, SIGN_IN, SIGN_UP, SPECIAL_OFFER  } from "../../Routes/path";
import { selectAllCategories, getCategoriesStatus, } from "../../Redux/Features/categoriesSlice";
import { NavbarDropdownButton, NavLinkText } from "../components";
import { logout, selectCurrentUser } from "../../Redux/Features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const rdcat = useSelector(selectAllCategories);
  const categoriesStates = useSelector(getCategoriesStatus);

  const navigate = useNavigate();
  const [categories, setCategories] = useState( categoriesStates==='succeeded'? rdcat : []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const getCategories = async () => {
    const data = await axios.get(ALL_CATEGORIES);
    if(data?.data.success === true) {
      setCategories(data?.data?.data);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex flex-row shadow-sm w-full justify-between bg-white border-gray-200 px-2 sm:px-4 py-2.5 items-center mx-auto">
        <div className="flex flex-row h-10">
          <Link
            to="/"
            className="flex flex-row items-center space-x-1 hover:cursor-pointer"
          >
            <img src={LOGO} alt={"logo"} className={"rounded  w-11 h-10"} />
            <span>Restaurant</span>
          </Link>
        </div>

        <div className="flex flex-row space-x-6">
          <NavbarDropdownButton categories={categories} />
           <Link to={SPECIAL_OFFER}> <NavLinkText text={"Special Offer"} /></Link>
          <Link to={CONTACT_US}> <NavLinkText text={"Contact Us"} /></Link>
          <Link to={ABOUT_US}> <NavLinkText text={"About Us"} /></Link>
        </div>
        <div className="flex flex-row space-x-4">
            {
              user!==null?
              <>
                <NavLinkText text={user.name} />
                <div onClick={handleLogout} > <NavLinkText text={"logout"} /> </div>
              </>
              :
              <>
                <NavLink to={SIGN_IN}> <NavLinkText text={"SignIn"} /> </NavLink>
                <NavLink to={SIGN_UP}> <NavLinkText text={"SignUp"} /> </NavLink>
              </>
            }
        </div>
      </div>
    </>
  );
}

export default Header;
