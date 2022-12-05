import React from 'react'
import SingleItem from './SingleItem'

function ItemsList({ items, category }) {
  // console.log(category);
  // console.log(">>>>>> itemList");
  // console.log("+++++++++", items);
  return (
    <>
      <div className="grid gap-y-4 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item, index) => (
          <SingleItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default ItemsList
