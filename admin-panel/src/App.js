import React from "react";
import { selectCurrentUser } from "./redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {Routes} from 'react-router-dom';

function App() {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  return (
    <div className="flex">
      {/* - if user unauthenticated redirect to login page
        - else show the admin panel
      */}
      {
        !user?
        <Routes>
            
        </Routes>
        :
        <Routes>

        </Routes>
      }
      
    </div>
  );
}

export default App;
