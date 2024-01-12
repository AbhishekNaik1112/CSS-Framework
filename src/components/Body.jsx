import React from "react";
import Kalvium from "../assets/Kalvium.png";

const Body = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-2 ml-6">
        <button className="bg-blue-600 p-1 rounded-sm">Button One</button>
      </div>
      <div className="text-red-800 border bg-red-400 rounded-sm ">
        <span className="font-bold">Alert!</span>
        This is awesome!
      </div>
      <div className="flex flex-col bg-gray-400 w-96 items-center justify-center mx-auto mt-40">
        <img src={Kalvium} alt="" />
        <div>
          Kalvium Store
          <div>You have a new course!</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
