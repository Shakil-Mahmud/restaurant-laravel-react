import React from 'react'
import { DUMMY_ITEM } from "../../Assets";

function MenuItem({item}) {
  // console.log("menuitem:::::::", item);
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white rounded-sm shadow-sm px-2">
        <div className="flex space-x-3">
          <img
            className="w-[5rem] h-[4rem] rounded-sm "
            src={item.photo ? item.photo : DUMMY_ITEM}
            alt={"item"}
          />
          <div className="flex flex-col">
            <span className="text-lg text-black">{item.name}</span>
            <span className="text-md text-gray-400">{item.category}</span>
          </div>
        </div>
        <div className="flex">
          <span className="text-lg text-black">{item.price} TK</span>
        </div>
      </div>
    </>
  );
}

export default MenuItem
