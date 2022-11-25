import React from 'react'

function ToggleButton({ checked = true, handleCheck }) {
  return (
    <>
      <label className="inline-flex relative items-center mb-5 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          value=""
          className="sr-only peer"
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
        {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active status</span> */}
      </label>
    </>
  );
}

export default ToggleButton;
