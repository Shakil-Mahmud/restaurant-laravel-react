import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MENU } from '../../Routes/path';

function AllMenuButton({handleAllMenu}) {

  return (
    <>
      <button
        type="submit"
        className="w-full rounded-lg text-sm px-5 py-2.5 mt-6 text-center border-2 text-red hover:text-white  bg-white hover:bg-red-500  border-red   font-medium"
        onClick={handleAllMenu}
      >
        View Our Full Menu
      </button>
    </>
  );
}

export default AllMenuButton;
