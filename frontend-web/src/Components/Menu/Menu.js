import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { FormHeading } from '../components';
import axios from 'axios';
import { Items_By_CATEGORIES } from '../../Routes/apiUrls';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryWiseItemsStatus, getItemByCategory, selectItemsByCategory } from '../../Redux/Features/itemsSlice';

function Menu({  category }) {
  // const [items, setItems] = useState([]);
  // const getCategories = async () => {
  //   const data = await axios.get(Items_By_CATEGORIES + category.id);
  //   if (data?.data.success === true) {
  //     setItems(data?.data?.data);
  //   }
  // };
  // console.log(">>> Enter menu");
  const dispatch = useDispatch();
  const itemsStatus = useSelector(getCategoryWiseItemsStatus);
  useEffect(() => {
    // getCategories();
    dispatch(getItemByCategory(category.id));
    // setItems(itemsByCategory.data);
    // if (itemsStatus!== 'succeeded') {
    // }
    // else{
    // }
  }, [dispatch, category.id]);

  const itemsByCategory = useSelector(selectItemsByCategory);
  const items = itemsByCategory.data;
  // console.log(">> status", itemsStatus);
  console.log(">> Items", itemsByCategory.data);
  // const [items, setItems] = useState( itemsStatus==='succeeded'? itemsByCategory.data : []);
  // console.log(Object.keys(items).length && typeof items === 'object');

  if (itemsStatus === "pending") {
    return <div className="flex text-['5rem]">Loading...</div>;
  }
  // if status == error
  // if status == succeeded
  if(itemsStatus==='succeeded'){
      return (
        <>
        {Object.keys(items).length && typeof items === "object" ? (
          <div className="flex flex-col space-y-2 w-full sm:w-2/3 md:w-1/2 mb-[2rem]">
            <FormHeading text={category.name} />
            {items.map((item, index) => (
              <MenuItem key={index} item={item} />
              ))}
          </div>
        ) : (
          <></>
          )}
      </>
    );
  }
}

export default Menu;

