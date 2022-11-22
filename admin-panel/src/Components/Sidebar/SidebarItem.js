import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown } from '../../Utils/svgIcons';

function SidebarItem({icon, name, path}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" flex flex-row text-black justify-around items-center hover:cursor-pointer hover:bg-cyan-500 px-1 py-4"
        onClick={() => navigate(path)}
      >
        <span className="text-lg font-semibold pl-4 mr-3">{name}</span>
        <div className="rotate-[270deg]">
          <ArrowDown />
        </div>
      </div>
    </>
  );
}

export default SidebarItem
