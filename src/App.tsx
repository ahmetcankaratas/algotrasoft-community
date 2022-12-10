import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Particle from "./components/Particle";
import Hero from "./components/Hero/Hero";
function App(): React.ReactElement {
  return (
    <div
      className={`mx-auto min-h-screen w-full py-2 font-opensans dark:bg-darkBlue dark:text-white`}
    >
      <Header />
      <Hero />
    </div>
  );
}

export default App;
