import React from 'react'
import { BigTitle } from '../../Components/components'
import { PageContainer } from '../../Layouts/Layouts'

function SpecialOffer() {
  return (
    <>
    <PageContainer>
      <div className="flex w-1/2 bg-white h-[10rem] justify-center items-center">
        <BigTitle text={'No offer available right now..'} />
      </div>
    </PageContainer>
    </>
  )
}

export default SpecialOffer
