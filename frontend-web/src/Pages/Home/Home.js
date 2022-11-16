import React from 'react'
import { HeroSection, Menu } from '../../Components/components';

function Home() {
  return (
    <>
      <div className="flex flex-row justify-center my-2">
        <div className="flex flex-col space-y-5 ">
          <HeroSection />
          {/* <Menu menuHeading={"Fan Favorite Food"} /> */}
        </div>
      </div>
    </>
  );
}

export default Home
