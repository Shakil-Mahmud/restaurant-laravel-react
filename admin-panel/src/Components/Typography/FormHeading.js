import React from 'react'

function FormHeading({text}) {
  return (
    <>
      <h2 className="mb-1 text-[3rem] sm:text-[4rem] text-gray-400 font-bold leading-tight tracking-tight md:text-[5rem] uppercase">
        {text}
      </h2>
    </>
  );
}

export default FormHeading
