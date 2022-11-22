import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../../Components/components';
function MainLayout() {
  return (
    <>
      <div className="z-0 flex flex-col  min-h-screen w-full justify-between">
        <div className="flex flex-row ">
          <div className="flex bg-cyan-100 w-[10rem]">
            <Sidebar />
          </div>
          <div className="flex flex-1">
            <Navbar />
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout
