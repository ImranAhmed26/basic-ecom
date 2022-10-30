import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import Categories from "../../constants/Categories";
import { Context } from "../../context/authContext";

const SideNav = ({ options }) => {
  const { state, dispatch } = useContext(Context);
  // console.log(state);
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <div>
      <div className="lg:w-[280px] xl:w-[300px] 2xl:w-[300px] px-8 py- capitalize  pl-10">
        <div className="flex flex-col gap-1.5">
          <div className="text-2xl font-bold font-sans pb-4 px-6 cursor-default ">Navigation</div>

          {options.sideNavLinks.map((item, index) => {
            return (
              <div
                className=" cursor-pointer text-base font-medium px-6 py-2 rounded shadow bg-slate-200 hover:bg-slate-300 hover:scale-105 duration-150 transition-all "
                onClick={() => {
                  router.push(`${item.link}`);
                }}
              >
                {item?.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
