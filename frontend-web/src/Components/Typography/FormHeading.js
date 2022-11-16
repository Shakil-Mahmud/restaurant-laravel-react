import React from 'react'

function FormHeading({text}) {
  return (
    <>
      <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl uppercase">
        {text}
      </h2>
    </>
  );
}

export default FormHeading
