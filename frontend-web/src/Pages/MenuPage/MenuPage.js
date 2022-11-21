import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AllMenuButton, Menu } from '../../Components/components'
import { PageContainer } from '../../Layouts/Layouts';

function MenuPage() {
  const {state} = useLocation();
  const [type, setType] = useState()
  const navigate = useNavigate();
  const handleAllMenu = () => {console.log("Hello")}
  // const handleAllMenu = () => navigate(MENU, {state: {categories}})

  return (
    <>
      <PageContainer>
        <div className="flex flex-col w-full items-center">
          {state.type === "all" ? (
            state.categories.map((category, index) => (
              <Menu key={index} category={category} />
            ))
          ) : (
            <>
              <Menu category={state?.categories} />
              {/* <AllMenuButton handleAllMenu={handleAllMenu} /> */}
            </>
          )}
        </div>
      </PageContainer>
    </>
  );
}

export default MenuPage
