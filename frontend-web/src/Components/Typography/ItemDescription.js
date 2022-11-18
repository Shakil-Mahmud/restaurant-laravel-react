import React from 'react'

function ItemDescription({text}) {
  return (
    <p className="mb-1 text-lg text-gray-600 rounded-sm">
      {text.substring(0,75)}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea

    </p>
  );
}

export default ItemDescription
