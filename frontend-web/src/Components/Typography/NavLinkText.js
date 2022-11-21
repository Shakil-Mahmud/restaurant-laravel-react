import React from 'react'

function NavLinkText({text}) {
  return (
    <p className="inline-flex items-center justify-center h-full text-gray-600  hover:text-gray-700 p-1 rounded-sm hover:bg-gray-100 hover:cursor-pointer">
      {text}
    </p>
  );
}

export default NavLinkText
