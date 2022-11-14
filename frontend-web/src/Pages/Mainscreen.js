import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Menu } from '../Components/components';
import { Footer, Header } from "../Layouts/Layouts";
import { CHECK_OTP, FORGET_PASSWORD, RESET_PASSWORD, SIGN_IN, SIGN_UP, UPDATE_PASSWORD } from '../Routes/path';
import { Home, SignIn, SignUp, UpdatePassword, ForgetPasswordEmail, ResetPassword, PasswordResetOTP, MenuPage } from "./index";

function Mainscreen() {
  return (
    <>
      <div className=" flex flex-col bg-slate-50 min-h-screen justify-between">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/menu"} element={<MenuPage />} />
        {/* <Unauthorized> */}{/*   user can access only if not authenticated */}
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={SIGN_IN} element={<SignIn />} />
          <Route path={UPDATE_PASSWORD} element={<UpdatePassword />} />
          <Route path={FORGET_PASSWORD} element={<ForgetPasswordEmail />} />
          <Route path={CHECK_OTP} element={<PasswordResetOTP />} />
          <Route path={RESET_PASSWORD} element={<ResetPassword />} />
        {/* </Unauthorized> */}



        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default Mainscreen
