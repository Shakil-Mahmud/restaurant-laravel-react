import React from 'react'

function PageContainer({ children }) {
  return (
    <>
      <div className="flex flex-row w-full px-2 my-2 ">
          {children}
      </div>
    </>
  );
}

export default PageContainer
