import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Menu } from '../../Components/components'
import { Items_By_CATEGORIES } from '../../Routes/apiUrls';

function MenuPage() {
  const {state} = useLocation();
  // console.log(state);
  const [items, setItems] = useState([]);

  const getCategories = async () =>{
    const data = await axios.get(Items_By_CATEGORIES + state.categoryID);
    if( data?.data.success === true ){
      setItems(data?.data?.data);
    }
  }
  useEffect(() => {
    getCategories();
  }, [state.categoryID]);
  return (
    <>
      <div className="flex flex-row w-ful mx-2">
        <div className="flex flex-col w-full items-center">
          <Menu menuHeading={state?.categoryName} items={items}  />
        </div>
      </div>
    </>
  );
}

export default MenuPage
