import React, { useState, useEffect, useContext } from "react";
import Categories from "../../constants/Categories";
import { Context } from "../../context/authContext";

const ProfileDetails = () => {
  const { state, dispatch } = useContext(Context);
  // console.log(state);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="lg:w-[400px] xl:w-[400px] 2xl:w-[400px]  h-screen px-8 py- capitalize  pl-10">
        <div className="flex flex-col gap-1.5">
          <div className="text-2xl font-bold font-sans pb-4 px-6 cursor-default ">
            Profile Details
          </div>

          <div className=" cursor-pointer text-base font-medium px-6 py-2 rounded shadow-sm bg-slate-200 hover:scale-105 duration-150 transition-all ">
            {`name: ${state.user?.name}`}
          </div>

          <div className=" cursor-pointer text-base font-medium px-6 py-2 rounded shadow-sm bg-slate-200 hover:scale-105 duration-150 transition-all ">
            {`email: ${state.user?.email}`}
          </div>

          <div className=" cursor-pointer text-base font-medium px-6 py-2 rounded shadow-sm bg-slate-200 hover:scale-105 duration-150 transition-all ">
            {`Phone: ${state.user?.phone}`}
          </div>

          <div className=" cursor-pointer text-base font-medium px-6 py-2 rounded shadow-sm bg-slate-200 hover:scale-105 duration-150 transition-all ">
            {`Type: ${state.user?.type}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
