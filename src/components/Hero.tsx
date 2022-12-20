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
        <a href="#about-us" className="my-6 px-8 py-2 shadow-md mx-auto w-xl rounded-md bg-darkCyan font-lg hover:scale-95">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;