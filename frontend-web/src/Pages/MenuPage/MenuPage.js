import React from 'react'
import { Menu } from '../../Components/components'

function MenuPage() {



  return (
    <>
        <div className="flex flex-row">
            <div className="flex flex-col  items-center">
                <Menu menuHeading={"Fan Favorite Food"} />
            </div>
        </div>
    </>
  )
}

export default MenuPage
