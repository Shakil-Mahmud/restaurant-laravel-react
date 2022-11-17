import React from 'react'
import { useLocation } from 'react-router-dom';
import { ItemCategory, ItemDescription, ItemName, ItemPrice, SingleItemImage } from '../../Components/components';
import { PageContainer } from '../../Layouts/Layouts';

function SingleItem() {
    const {state} = useLocation();
    console.log(state.item.name);
    console.log(state.item.image);
  return (
    <>
      <PageContainer>
        <div className="flex bg-white w-full mx- flex-col md:flex-row justify-around items-center py-6 px-10">
          {/*
            - image components
            - info component
                - category
                - Burger name
                - Description
                - price
            */}
          <div className="flex md:justify-end justify-center border w-[20rem] sm:w-[30rem] md:w-[40rem] md:mr-10 mb-6 md:mb-0">
            <SingleItemImage image={state.item.image} />
          </div>
          <div className="flex flex-col items-start w-[20rem] sm:w-[30rem] md:w-[50rem] border space-y-3">
            <ItemCategory text={state.item.name} />
            <ItemName text={state.item.name} />
            <ItemDescription text={""} />
            <ItemPrice text={'Quantity __________'} />
            <ItemPrice text={state.item.price} />
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default SingleItem
