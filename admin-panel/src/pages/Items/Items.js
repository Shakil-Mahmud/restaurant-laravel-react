import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AddButton, FilterDropdownBtn, ItemsList, SearchBar } from '../../Components/components';
import { ALL_CATEGORIES, ALL_ITEMS } from '../../Routes/apiUrls';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllItems, selectAllItems } from '../../Redux/Features/itemSlice';

function Items() {
  // const dispatch = useDispatch();
  // const getItems = useSelector(selectAllItems);
  // const [allItems, setAllItems] = useState(getItems.data);
  const [allItems, setAllItems] = useState([]);
  const [allCategories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilterChange = (e) => setSelectedCategory(e.target.value);
  // const handleFilterChange = (e)=> console.log("IIIIIIIIIIDDDDDDD", e.target.value);
  // const handleFilterChange = (selectedCategoryID)=> console.log("IIIIIIIIIIDDDDDDD", selectedCategoryID);

  function getAllCategories(){
    const data = axios
      .get(ALL_CATEGORIES)
      .then((res) => setCategories(res.data.data))
      .catch((err)=> console.log(err));
  }
  useEffect(()=>{
    getAllCategories();
  },[]);
  async function getAllItemsData() {
    try{
      const data = await axios.get(ALL_ITEMS);
      if (data?.data?.success) {
        setAllItems(data?.data?.data);
      }
    }
    catch{
      console.log("error");
    }
  }

  useEffect(()=>{
    getAllItemsData();
  }, [])
  console.log("CCCCCAATEEEGOORRIES: ", allCategories);
  // console.log(allItems);
  // console.log("typeof allItems && LLLLL", typeof allItems === "object" && Object.keys(allItems).length>0);

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
          <AddButton text={"Add new item"} />
          <SearchBar />
          <FilterDropdownBtn
            allCategories={allCategories}
            selectedCategory={selectedCategory}
            handleFilterChange={handleFilterChange}
          />
        </div>
        {typeof allItems === "object" && Object.keys(allItems).length > 0 ? (
          <ItemsList items={allItems} category={selectedCategory} />
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
