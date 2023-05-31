import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddButton, AddItem, FilterDropdownBtn, ItemsList, SearchBar } from '../../Components/components';
import { fetchCategories, selectAllCategories } from '../../Redux/Features/categoriesSlice';
import { fetchAllItems, getItemByCategory, selectAllItems } from '../../Redux/Features/itemSlice';

function Items() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);

  const allItems = useSelector(selectAllItems);
  const allCategories = useSelector(selectAllCategories)?.data;

  const handleFilterChange = (e) => setSelectedCategory(e.target.value);
  // const handleItemEditModal = ()=> se
  useEffect(() => {
    dispatch(fetchCategories());
    selectedCategory === 'all' ?  dispatch(fetchAllItems()) : dispatch(getItemByCategory(selectedCategory));
  }, [dispatch, selectedCategory]);

  return (
    <>
      <div className="flex flex-col space-y-[2rem] relative">
        {/* header
          -add new btn
          -search bar
          -filter
          -items per page selector
          -next prev page button
      */}
        <AddItem show={modalOpen} setShow={setModalOpen} />
        <div className="flex space-x-2">
          <AddButton text={"Add new item"} show={modalOpen} setShow={setModalOpen} />
          <SearchBar />
          {typeof allItems === "object" && Object.keys(allItems).length > 0 ? (
            <FilterDropdownBtn
              allCategories={allCategories}
              selectedCategory={selectedCategory}
              handleFilterChange={handleFilterChange}
            />
          ) : (
            <></>
          )}
        </div>
        {typeof allItems === "object" && Object.keys(allItems).length > 0 ? (
          <ItemsList items={allItems?.data} category={selectedCategory} />
        ) : (
          <></>
        )}
        {/* list items
        row list
        image
       */}
        {/* pagination buttons 1 2 3 4 ......10 */}
      </div>
    </>
  );
}

export default Items
