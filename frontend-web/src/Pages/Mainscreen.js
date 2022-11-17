import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import { ABOUT_US, CHECK_OTP, CONTACT_US, FORGET_PASSWORD, ITEM, MENU, RESET_PASSWORD, SIGN_IN, SIGN_UP, SPECIAL_OFFER, UPDATE_PASSWORD } from '../Routes/path';
import { Home, SignIn, SignUp, UpdatePassword, ForgetPasswordEmail, ResetPassword, PasswordResetOTP, MenuPage, AboutUs, ContactUs, SingleItem } from "./index";
import SpecialOffer from './SpecialOffer/SpecialOffer';

function Mainscreen() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path={"/"} element={<Home />} /> */}
          <Route path={ABOUT_US} element={<AboutUs />} />
          <Route path={CONTACT_US} element={<ContactUs />} />
          <Route path={SPECIAL_OFFER} element={<SpecialOffer />} />
          <Route path={MENU} element={<MenuPage />} />
          <Route path={ITEM} element={<SingleItem />} />

          {/* <Unauthorized> */}
          {/*   user can access only if not authenticated */}
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={SIGN_IN} element={<SignIn />} />
          <Route path={UPDATE_PASSWORD} element={<UpdatePassword />} />
          <Route path={FORGET_PASSWORD} element={<ForgetPasswordEmail />} />
          <Route path={CHECK_OTP} element={<PasswordResetOTP />} />
          <Route path={RESET_PASSWORD} element={<ResetPassword />} />
          {/* </Unauthorized> */}
        </Route>
      </Routes>
    </>
  );
}

export default Mainscreen
