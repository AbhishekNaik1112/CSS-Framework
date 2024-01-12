import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center p-5 bg-red-400 border-t-8 border-blue-800">
        <div className="mr-5">
          <span className="text-white text-2xl font-bold">Kalvium</span>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div className="text-sm flex flex-wrap">
            <a className="font-semibold mr-4 xl:text-lg">About Us</a>
            <a className="mr-4 xl:text-lg font-semibold">Contacts</a>
            <a className="mr-4 xl:text-lg font-semibold">Courses</a>
          </div>

          <div>
            <button className="text-white border-white border rounded p-1 px-5 font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="px-40 my-5">
        <button className="text-white bg-blue-600 text-s font-bold rounded-lg px-5 py-2">
          Button One
        </button>
      </div>
    </>
  );
};

export default Navbar;
