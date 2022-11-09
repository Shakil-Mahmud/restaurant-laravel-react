import React from 'react'
import { HERO_IMG } from "../../Assets";

function Home() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Order your favorite food
                    </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                >
                    Check Offers
                </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={HERO_IMG} alt="mockup" />
                </div>
            </div>
        </section>
      </div>
    </>
  );
}

export default Home
