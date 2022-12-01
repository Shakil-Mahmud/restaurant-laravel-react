import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryWiseItemsStatus, getItemByCategory, selectItemsByCategory } from '../../Redux/Features/itemsSlice';
import { FormHeading } from '../components'
import SingleSimilarItem from './SingleSimilarItem'

function SimilarItems({id, categoryID }) {
  const dispatch = useDispatch();
  const itemsStatus = useSelector(getCategoryWiseItemsStatus);
  const items = useSelector(selectItemsByCategory).data;
  console.log(itemsStatus);
  console.log(items);

  useEffect(()=>{
      dispatch(getItemByCategory(categoryID));
  }, [dispatch])
  if (itemsStatus==='succeeded') {
    return (
      <>
        <div className="flex flex-col">
          <FormHeading text={"Similar Items"} />
          <div className="flex space-x-4">
            {items.map((item, index) =>
              item.id !== id ? (
                <SingleSimilarItem
                  key={index}
                  item={item}
                />
              ) : (
                <div />
              )
            )}
          </div>
        </div>
      </>
    );
  }
  else{
    <></>
  }
}

export default SimilarItems
