import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LOGO } from "../../Assets";
import { ALL_CATEGORIES } from "../../Routes/apiUrls";
import { ABOUT_US, CONTACT_US, MENU, SIGN_IN, SIGN_UP, SPECIAL_OFFER  } from "../../Routes/path";

function Header() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [hidden, setHidden] = useState(false);
  const menu = []
  const getCategories = async () => {
    const data = await axios.get(ALL_CATEGORIES);
    if(data?.data.success === true) {
      setCategories(data?.data?.data);
      // categories.map( (category) => {
      //     // <Link to={{pathname: MENU, state: { category: category.id}}}>{category.name}</Link>
      //      return menu.push(
      //       <li>
      //         <Link
      //           to={{ pathname: MENU, state: { category: category.id, categoryName: category.name } }}
      //           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      //         >
      //           {category.name}
      //         </Link>
      //       </li>
      //     );
      // });
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  // console.log(categories);

  const handleMenu = () => {
    setHidden(!hidden);
    console.log(hidden);
  };
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
          <div className="flex flex-row ">
            <div id="dropdown" className="z-10 ">
              <div
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="text-center inline-flex items-center hover:cursor-pointer "
                onClick={handleMenu}
              >
                Our Menu
              </div>

              <ul
                id="dropdownMenu"
                className={`${
                  hidden ? "hidden" : ""
                }  py-1 text-sm text-gray-700 dark:text-gray-200`}
              >
                <li>
                  <Link
                    to={MENU}
                    state={{ category: "all" }}
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    All Menu
                  </Link>
                </li>
                {Object.keys(categories).length > 0 ? (
                  categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        navigate(MENU, { state: { categoryID: category.id, categoryName: category.name } })
                      }
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {category.name}
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
          <div className="flex flex-row ">
            <Link to={SPECIAL_OFFER}>Special Offer</Link>
          </div>
          <div className="flex flex-row ">
            <Link to={CONTACT_US}>Contact Us</Link>
          </div>
          <div className="flex flex-row ">
            <Link to={ABOUT_US}>About Us</Link>
          </div>
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
