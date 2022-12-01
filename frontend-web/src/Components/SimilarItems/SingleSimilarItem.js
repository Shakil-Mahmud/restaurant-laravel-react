import React from 'react'
import { ItemPrice, SmallImage } from "../components";

function SingleSimilarItem({item}) {
  return (
    <>
      <div className="flex flex-row bg-white pr-2 space-x-2 shadow-md hover:cursor-pointer hover:scale-105 ">
        <div className="flex">
          <SmallImage />
        </div>
        <div className="flex flex-col items-center">
          <p className='text-lg'>{item.name}</p>
          <ItemPrice text={item.price} />
        </div>
      </div>
    </>
  );
}

export default SingleSimilarItem
