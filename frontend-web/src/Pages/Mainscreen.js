import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from "../Layouts/Layouts";
import {Home} from './index';
function Mainscreen() {
  return (
    <>
      <div className=' flex flex-col bg-slate-50 min-h-screen justify-between'>
        <Header />
        <Routes>
          <Route path={'/'}  element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default Mainscreen
