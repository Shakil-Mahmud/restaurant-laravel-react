import React from 'react'
import { Footer, Header } from "../../Layouts/Layouts";

function Mainscreen() {
  return (
    <>
      <div className=' flex flex-col bg-slate-50 min-h-screen justify-between'>
        <Header />
        <div className="flex flex-row">
            Body
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Mainscreen
