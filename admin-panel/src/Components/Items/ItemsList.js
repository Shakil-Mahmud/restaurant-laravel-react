import React from 'react'
import SingleItem from './SingleItem'

function ItemsList() {
  return (
    <>
      <div className="grid gap-y-4 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </>
  );
}

export default ItemsList
