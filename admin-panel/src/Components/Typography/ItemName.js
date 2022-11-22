import React from 'react'

function ItemName({text}) {
  return (
    <h3 className="mb-1 text-4xl  rounded-sm text-black font-bold capitalize">
      {text}
    </h3>
  );
}

export default ItemName
