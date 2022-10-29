import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    "logic for handling search";
  };

  return (
    <div>
      <div
        className="bg-gray-100 max-w-lg w-80 lg:w-full h-10 rounded-full text-xl items-center sm:flex justify-between shadow-sm hidden text-gray-500 placeholder-black"
        onClick={(e) => {
          handleSearch;
        }}
      >
        <input
          type="text"
          placeholder="Search products"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className=" bg-gray-100 outline-none w-full px-6 rounded-full placeholder-black"
        />
        <div className="h-full w-16 flex justify-center rounded-r-xl ">
          <MagnifyingGlassIcon className="cursor-pointer w-6" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
