import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MENU } from '../../Routes/path';
import { NavLinkText } from '../components';

function NavbarDropdownButton({categories}) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

  return (
    <>
      <div className="inline-flex bg-white rounded-md">
        <div className="relative">
          <div
            className="flex flex-row items-center hover:text-gray-700"
            onClick={() => setShow(!show)}
          >
            <NavLinkText text={"Our Menu"} />
          </div>

          <div
            className={` ${
              show ? "absolute" : "hidden"
            } right-[-2rem] z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100
              rounded-md   shadow-lg `}
          >
            <div className="p-2">
              <Link
                className="block py-2 px-4 hover:bg-gray-100"
                onClick={() => setShow(!show)}
                to={MENU}
                state={{ categories: categories, type: "all" }}
              >
                <NavLinkText text={"All Menu"} />
              </Link>
              {Object.keys(categories).length > 0 ? (
                categories.map((category, index) => (
                  <div
                    key={index}
                    className="block py-2 px-4 hover:bg-gray-100  hover:cursor-pointer"
                    onClick={() => {
                      setShow(!show);
                      navigate(MENU, {
                        state: { categories: category, type: "single" },
                      });
                    }}
                  >
                    <NavLinkText text={category.name} />
                  </div>
                ))
              ) : (
                <></>
              )}
              {/* className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700" */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarDropdownButton
