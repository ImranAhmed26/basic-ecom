import React from "react";

const Banner = ({ children }) => {
  return (
    <div>
      <div className=" flex flex-col text-center justify-center items-center w-full h-40 lg:h-72 bg-gradient-to-r from-sky-500 to-violet-600">
        <div className="flex flex-col text-center justify-center items-center text-2xl lg:text-4xl font-bold text-gray-800 cursor-default px-4 ">
          <div>{children}</div>
          {/* <div className="flex gap-6 py-4 w-full justify-center items-center ">
            <button className="w-48 h-full rounded-xl bg-lime-400 p-2">Latest</button>
            <button className="w-48 h-full rounded-xl bg-lime-400 p-2">Learn More</button>
          </div> */}
        </div>
      </div>
      <div className="w-full h-16 bg-stone-100"></div>
    </div>
  );
};

export default Banner;
