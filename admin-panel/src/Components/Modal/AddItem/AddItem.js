import React from 'react'

function AddItem({show, setShow}) {
console.log("show>>", show);
  return (
    <>
      <div className={`${show? "flex" : "hidden"} min-w-[100%] justify-center min-h-[100vh] border border-red-500 absolute top-0 left-0 z-10 shadow-lg`}
      >
        <div className="flex min-w-[80%] min-h-[50%] border border-yellow-300 bg-white">
            <div className="flex justify-end hover:cursor-pointer" onClick={() => setShow(!show)}   >X</div>
        </div>
      </div>
    </>
  );
}

export default AddItem
