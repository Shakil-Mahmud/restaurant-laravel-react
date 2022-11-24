import React, { useState } from 'react'
import { ToggleButton } from "../../Components/components";

function SingleItem() {
    const [checked, setChecked] = useState(true);
  const handleCheck = ()=>{
    setChecked(!checked);
  }
  return (
    <>
      <div
        className="flex flex-col bg-white rounded-md shadow-md px-1 py-2
          w-[14rem] sm:w-[12rem] md:w-[10rem] lg:w-[11rem] xl:w-[12rem]
          h-[12rem] sm:h-[10rem] md:h-[12rem] lg:h-[12rem] xl:h-[12rem]
          "
      >
        <div className="flex w-full justify-end items-start align-top">
          <ToggleButton checked={checked} handleCheck={handleCheck} />
        </div>
        <div className="fle w-full h-[80%]">
          {/* <img
            src="resources\Image\demo-image.png"
            className="w-full h-full rounded-sm "
          /> */}
        </div>
        <p>Book name</p>
        <p>Author name</p>
      </div>
    </>
  );
}

export default SingleItem
