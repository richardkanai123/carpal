import React from "react";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-lime-600 min-h-screen  text-gray-800 max-w-screen-xl m-auto	max-h-fit  p-0  ">
      {children}
    </div>
  );
};

export default Layout;
