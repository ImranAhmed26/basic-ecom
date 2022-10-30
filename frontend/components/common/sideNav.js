import React, { useState, useEffect, useContext } from "react";
import Categories from "../../constants/Categories";
import { Context } from "../../context/authContext";

const SideNav = ({ options }) => {
  const { state, dispatch } = useContext(Context);
  // console.log(state);

  useEffect(() => {}, []);
  console.log(options);
  return (
    <div>
      <div className="lg:w-[280px] xl:w-[300px] 2xl:w-[300px]  h-screen px-8 py- capitalize  pl-10">
        <div className="flex flex-col gap-1.5">
          <div className="text-2xl font-bold font-sans pb-4 px-6 cursor-default ">
            Profile Details
          </div>

          {options.sideNavLinks.map((items, index) => {
            return (
              <div className=" cursor-pointer text-base font-medium px-6 py-2 rounded shadow  hover:bg-slate-200 hover:scale-105 duration-150 transition-all ">
                {items?.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
