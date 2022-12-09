import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";

function App(): React.ReactElement {

  return (
    <div
      className={`mx-auto h-full w-full py-2 font-opensans dark:bg-darkBlue dark:text-white`}
    >
      <Header />
    </div>
  );
}

export default App;
