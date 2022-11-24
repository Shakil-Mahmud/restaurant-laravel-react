import React from 'react'

function AuthenticationForm({children}) {
  return (
    <>
      <section className="bg-blue-50 text-black h-auto">
        <div className="flex flex-col items-center justify-center  mx-auto">
          <div className="w-full p-6 bg-white rounded-lg shadow-md md:mt-0 max-w-md  sm:p-8">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthenticationForm
