import React from 'react'
import { CATEGORY, ITEM } from '../../Routes/path';
import SidebarItem from './SidebarItem'

function Sidebar({className}) {
  return (
    <>
      <div
        className={`flex flex-col w-full min-h-screen rounded-sm py-3 gap-y-2 justify-start mt-[5rem] `}
      >
        {/* <SidebarItem key={1} name="Dash" icon={<RiDashboardLine className='w-full h-full' />} /> */}
        <SidebarItem key={1} name="Dash" icon={""} />
        <SidebarItem key={2} name="Items" icon={""} path={ITEM} />
        <SidebarItem key={3} name="Categories" icon={""} path={CATEGORY} />
        {/* <SidebarItem key={4} name="Users" icon={""} /> */}
      </div>
    </>
  );
}

export default Sidebar
