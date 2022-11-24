import React from 'react'

function FormHeading({text}) {
  return (
    <>
      <h2 className="mb-1 text-[2rem] text-gray-400 font-bold leading-tight tracking-tight">
        {text}
      </h2>
    </>
  );
}

export default FormHeading
