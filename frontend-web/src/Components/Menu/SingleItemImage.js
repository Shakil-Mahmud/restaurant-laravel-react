import React from 'react'
import { DUMMY_ITEM } from "../../Assets";
function SingleItemImage({image}) {
    console.log(image);
    return (
      <>
        <div className="flex w-[10rem] h-[8rem] md:w-[15rem] md:h-[12rem] lg:w-[20rem] lg:h-[16rem]">
          <img
            className="w-full h-full rounded-sm"
            src={image ? DUMMY_ITEM : DUMMY_ITEM}
            alt={"product"}
          />
        </div>
      </>
    );
}

export default SingleItemImage
