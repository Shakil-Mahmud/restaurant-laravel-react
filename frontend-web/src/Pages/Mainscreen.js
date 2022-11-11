import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Menu } from '../Components/components';
import { Footer, Header } from "../Layouts/Layouts";
import { Home, SignIn, SignUp, UpdatePassword, ForgetPasswordEmail, ResetPassword, PasswordResetOTP } from "./index";

function Mainscreen() {
  return (
    <>
      <div className=" flex flex-col bg-slate-50 min-h-screen justify-between">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/menu"} element={<Menu />} />
        {/* <Unauthorized> */}{/*   user can access only if not authenticated */}
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/update/password"} element={<UpdatePassword />} />
          <Route path={"/forget/password"} element={<ForgetPasswordEmail />} />
          <Route path={"/check/otp"} element={<PasswordResetOTP />} />
          <Route path={"/reset/password"} element={<ResetPassword />} />
        {/* </Unauthorized> */}



        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default Mainscreen
