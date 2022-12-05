import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToggleButton, EditButton } from "../../Components/components";
import { itemStatusUpdate } from '../../Redux/Features/itemSlice';

function SingleItem({item}) {
  // console.log(">>>>>> Single item page");
  // console.log("*******Single item", item);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(item.available);
  const handleCheck = ()=>{
    setChecked(!checked);
    dispatch(itemStatusUpdate({id: item.id}));
    // console.log(item);
  }

  const handleEdit = ()=> navigate()

  return (
    <>
      <div
        className={`flex flex-col bg-white rounded-md shadow-md px-1 py-2
          w-[14rem] sm:w-[12rem] md:w-[10rem] lg:w-[11rem] xl:w-[12rem]
          h-[12rem] sm:h-[10rem] md:h-[12rem] lg:h-[12rem] xl:h-[12rem]
            ${checked ? 'opacity-100' : 'opacity-50'}
          `}
      >
        <div className="flex w-full justify-between items-start align-top px-2">
          <EditButton />
          <ToggleButton checked={checked} handleCheck={handleCheck} />
        </div>
        <div className="fle w-full h-[80%]">
          {/* <img
            src="resources\Image\demo-image.png"
            className="w-full h-full rounded-sm "
          /> */}
        </div>
        <p>{item?.name}</p>
        <p>{item?.price}</p>
      </div>
    </>
  );
}

export default SingleItem
