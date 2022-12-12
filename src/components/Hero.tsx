import React from "react";
import Typed from "react-typed";
import Particle from "./Particle";

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="container mx-auto mt-[-96px] flex h-screen w-full max-w-4xl flex-col justify-center text-center">
        <p className="p-2 font-bold text-darkCyan">ALGOTRASOFT</p>
        <h1 className="text-4xl font-bold sm:text-6xl md:py-6">
          THE NEXT GENERATION
        </h1>
        <div className="flex items-center justify-center">
          <p className="py-4 text-xl font-bold sm:text-4xl md:text-5xl">
            Algorithmic Trading for
          </p>
          <Typed
            className="pl-2 text-xl font-bold text-darkCyan sm:text-4xl md:pl-4 md:text-5xl"
            strings={["Stocks", "Crypto", "Forex", "NFTs"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Join the Quantitative Revolution
        </p>
        <a href="#collabration" className="my-6 px-8 py-2 shadow-md mx-auto w-xl rounded-md bg-darkCyan font-lg hover:scale-95">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className='text-white'>
<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
  <p className='text-[#00df9a] font-bold p-2'>
    GROWING WITH DATA ANALYTICS
  </p>
  <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    Grow with data.
  </h1>
  <div className='flex justify-center items-center'>
    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
      Fast, flexible financing for
    </p>
    <Typed
    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
      strings={['BTB', 'BTC', 'SASS']}
      typeSpeed={120}
      backSpeed={140}
      loop
    />
  </div>
  <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
  <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
</div>
</div> */
}
