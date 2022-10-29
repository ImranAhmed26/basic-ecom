import React, { useState, useEffect } from "react";
import Categories from "../../constants/Categories";

const SideCategories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(Categories?.filters);
  }, []);

  return (
    <div>
      <div className="lg:w-60 xl:w-72 2xl:w-80  h-screen px-8 py- capitalize  pl-10">
        <div className="flex flex-col gap-1.5">
          <div className="text-2xl font-bold font-sans pb-4 px-6 cursor-default ">{`${
            Object.keys(Categories)[0]
          } `}</div>
          {category.map((item, index) => {
            return (
              <div
                key={index}
                className=" cursor-pointer text-base font-medium px-6 py-2 rounded shadow-sm hover:bg-slate-200 hover:scale-105 duration-150 transition-all "
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideCategories;
