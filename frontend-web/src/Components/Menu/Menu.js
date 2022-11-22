import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { FormHeading } from '../components';
import axios from 'axios';
import { Items_By_CATEGORIES } from '../../Routes/apiUrls';
function Menu({  category }) {
    // const [category, setCategory] = useState(categoryID);
    const [items, setItems] = useState([]);
    const getCategories = async () => {
      const data = await axios.get(Items_By_CATEGORIES + category.id);
      if (data?.data.success === true) {
        setItems(data?.data?.data);
      }
    };
    useEffect(() => {
      getCategories();
    }, [category.id]);
    // console.log(Object.keys(items).length && typeof items === 'object');

  return (
    <>
      {Object.keys(items).length && typeof items === "object" ?
        <div className="flex flex-col space-y-2 w-full sm:w-2/3 md:w-1/2 mb-[2rem]">
            <FormHeading text={category.name} />
            {items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
        </div>
        :
        <></>
    }
    </>
  );
}

export default Menu;

