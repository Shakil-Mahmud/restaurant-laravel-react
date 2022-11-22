import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../../Components/components';
function MainLayout() {
  return (
    <>
      <div className="z-0 flex flex-row w-full justify-between">
        <div className="flex w-1/4 bg-cyan-100 min-h-screen">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
            <Navbar />
            <main>
              <Outlet />
            </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout
