import React from "react";
import { TbError404 } from "react-icons/tb";
const NotFound = () => {
  return (
    <div className="flex flex-col bg-lime-500 text-white p-4 w-1/2 h-3/4 text-center items-center justify-center gap-3 rounded-lg shadow-xl">
      <span className="text-8xl">
        <TbError404 />
      </span>
      <h1 className="text-6xl font-extrabold">CarPal</h1>
      <p className="text-4xl font-semibold">Oops....</p>

      <p className="text-2xl">Page not found</p>
    </div>
  );
};

export default NotFound;
