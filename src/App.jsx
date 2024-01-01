import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center flex-col bg-white-100 bg-opacity-80 dark:bg-neutral-900 bg-hero bg-cover bg-center transition ease-in-out duration-300`}
    >
      <Home />
    </div>
  );
}

export default App;
