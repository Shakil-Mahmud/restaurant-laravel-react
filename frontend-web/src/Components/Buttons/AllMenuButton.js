import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { MENU } from '../../Routes/path';

function AllMenuButton({handleAllMenu}) {

  return (
    <>
      <button
        type="submit"
        className="w-full rounded-sm text-sm px-5 py-2.5 mt-6 text-center border-2 border-red-500 text-red-500 hover:text-white  bg-white hover:bg-red-500     font-medium"
        onClick={handleAllMenu}
      >
        View Our Full Menu
      </button>
    </>
  );
}

export default AllMenuButton;
