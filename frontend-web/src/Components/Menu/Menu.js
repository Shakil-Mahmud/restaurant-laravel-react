import React from 'react'
import MenuItem from './MenuItem'
import { FormHeading } from '../components';
function Menu({ menuHeading, items }) {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full ">
        <FormHeading text={menuHeading} />
        {
          items.map(
            (item, index) =>
              <MenuItem key={index} item={item} text={'testing'} />
          )
        }
      </div>
    </>
  );
}

export default Menu;

