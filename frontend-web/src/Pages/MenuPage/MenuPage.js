import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AllMenuButton, Menu } from '../../Components/components'

function MenuPage() {
  const {state} = useLocation();
  const navigate = useNavigate();
  const handleAllMenu = () => {console.log("Hello")}
  // const handleAllMenu = () => navigate(MENU, {state: {categories}})

  return (
    <>
      <div className="flex flex-row w-ful mx-2">
        <div className="flex flex-col w-full items-center">
          {state.type === "all" ? (
            state.categories.map((category, index) => (
              <Menu key={index} category={category} />
            ))
          ) : (
            <>
              <Menu category={state?.categories} />
              <AllMenuButton handleAllMenu={handleAllMenu} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MenuPage
