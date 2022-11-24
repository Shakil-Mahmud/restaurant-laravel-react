import React from 'react'
import { ArrowDown, Plus } from '../../Utils/svgIcons'

function AddButton({text}) {
  return (
    <>
      <div className="flex flex-row bg-fuchsia-100 active:bg-fuchsia-300  hover:cursor-pointer px-4   py-3 rounded-sm shadow-md items-center space-x-2">
        <Plus />
        <p className="text-[.8rem] md:text-[1rem]">{text}</p>
      </div>
    </>
  );
}

export default AddButton
