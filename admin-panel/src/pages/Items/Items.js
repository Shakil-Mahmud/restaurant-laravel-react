import React from 'react'
import { AddButton, FilterDropdownBtn, ItemsList, SearchBar } from '../../Components/components';

function Items() {
    console.log("items");
    // const data =
  return (
    <>
    <div className="flex flex-col space-y-[2rem]">
      {/* header
          -add new btn
          -search bar
          -filter
          -items per page selector
          -next prev page button
      */}
      <div className="flex space-x-2">
        <AddButton text={'Add new item'} />
        <SearchBar />
        <FilterDropdownBtn />
      </div>
      <ItemsList />
      {/* list items
        row list
        image
       */}
      {/* pagination buttons 1 2 3 4 ......10 */}
    </div>
    </>
  )
}

export default Items
