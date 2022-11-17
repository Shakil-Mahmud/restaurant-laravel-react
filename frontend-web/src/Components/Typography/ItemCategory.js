import React from 'react'

function ItemCategory({text}) {
  return (
      <h2 className="mb-1 text-lg bg-red-500 px-2 py-1 rounded-sm leading-tight text-white uppercase">
        {text}
      </h2>
  );
}

export default ItemCategory
