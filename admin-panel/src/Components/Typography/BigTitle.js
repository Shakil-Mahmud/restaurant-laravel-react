import React from 'react'

function BigTitle({text}) {
  return (
    <>
        <h1
            className='text-[2rem] sm:text-[2.2rem] '
        >
            {text}
        </h1>
    </>
  )
}

export default BigTitle
