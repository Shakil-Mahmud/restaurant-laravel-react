import React, { useState } from 'react'
import MenuItem from './MenuItem'
import axios  from "axios";
import { ALL_ITEMS } from '../../Routes/apiUrls';
import { FormHeading } from '../components';
function Menu({menuHeading, items}) {
  // const [items, setItems] = useState([]);
  // async function getData() {
  //   const data =  axios.get(ALL_ITEMS).then(res=>res.data).then(data => setItems(data));
  // }
  // axios.get(ALL_ITEMS).then(res=>res.data).then(data => setItems(data));
  // console.log(items);
  // if(data.success)
  //   console.log(data);
  return (
    <>
      <div className="flex flex-col space-y-2 ">
        <FormHeading text={menuHeading} />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </>
  )
}

export default Menu;

