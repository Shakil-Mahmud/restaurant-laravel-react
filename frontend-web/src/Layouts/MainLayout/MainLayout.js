import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header, Footer } from "../../Components/components";

function MainLayout() {
  return (
    <>
      <div className="z-0 flex flex-col bg-blue-50 min-h-screen justify-between">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout
