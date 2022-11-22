import React from 'react'
import { useDispatch } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/Features/userSlice';
import { NavLinkText } from '../components'

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }
  return (
    <>
      <div className="flex w-full justify-end bg-slate-200">
        <div className="hover:cursor-pointer"
            onClick={handleLogout}
        >
          <NavLinkText text={"logout"} />
        </div>
      </div>
    </>
  );
}

export default Navbar
