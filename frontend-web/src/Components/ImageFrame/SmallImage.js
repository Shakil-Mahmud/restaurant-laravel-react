import React from 'react'
import { DUMMY_ITEM } from "../../Assets";

function SmallImage({image}) {
    // console.log(image);
    return (
      <>
        <div className="flex w-[5rem] h-[4rem]">
          <img
            className="w-full h-full rounded-sm"
            src={image ? DUMMY_ITEM : DUMMY_ITEM}
            alt={"product"}
          />
        </div>
      </>
    );
}

export default SmallImage
