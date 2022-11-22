import React from "react";
import { selectCurrentUser } from "./Redux/Features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes} from 'react-router-dom';
import { Dashboard, Login } from "./pages";
import MainLayout from "./Layouts/MainLayout/MainLayout";

function App() {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  return (
    <div className="flex">
      {/* - if user unauthenticated redirect to login page
        - else show the admin panel
      */}
      {!user ? (
        <Routes>
          <Route path={"/"} element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout  />} >
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
