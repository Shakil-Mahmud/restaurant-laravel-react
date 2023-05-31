import React from 'react'
import {Plus } from '../../Utils/svgIcons'

function AddButton({ text, show, setShow }) {
  return (
    <>
      <div
        className="flex flex-row bg-fuchsia-100 active:bg-fuchsia-300  hover:cursor-pointer px-4   py-3 rounded-sm shadow-md items-center space-x-2"
        onClick={() => setShow(!show)}
      >
        <Plus />
        <p className="text-[.8rem] md:text-[1rem]">{text}</p>
      </div>
    </>
  );
}

export default AddButton
