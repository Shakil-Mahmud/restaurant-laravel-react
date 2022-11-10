import React from 'react'

function SubmitButton() {
  return (
    <>
      <button
        type="submit"
        className="w-full text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Reset password
      </button>
    </>
  );
}

export default SubmitButton
