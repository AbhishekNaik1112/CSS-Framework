import React from "react";

const Store = () => {
  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-2xl flex items-center space-x-8 border">
      <div>
        <img
          className="h-9"
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          alt="Kalvium-logo"
        />
      </div>

      <div>
        <h1 className="text-2xl font-medium text-black">Kalvium Store</h1>
        <p className="text-slate-400">You have a new Course!</p>
      </div>
    </div>
  );
};

export default Store;
