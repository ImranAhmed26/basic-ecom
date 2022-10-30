import Image from "next/image";
import React, { useState, useEffect } from "react";

import { products } from "../../constants/productDummyData";
import { GET } from "../../lib/api";
import ProductCard from "../common/productCard";

const UserList = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();

  const handleOpenCard = () => {
    setVisible(true);
  };

  useEffect(() => {
    GET("/users").then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
      } else if (status === 200) {
        console.log("Login success");
        console.log(data);
        setData(data);
      }
    });
  }, []);

  return (
    <div className="lg:px-6 pb-4 mx-2  h-full w-full">
      <div className="text-2xl font-bold font-sans cursor-default w-full pb-2">Users</div>
      <div className="">
        <table className="min-w-full divide-y divide-gray-200 rounded-md">
          <tr className="w-full bg-gray-700 rounded-md px-2 py-10 text-gray-100">
            <th className="py-2">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>type</th>
          </tr>
          {data?.map((item, index) => {
            return (
              <tr
                key={index}
                className="w-full px-6 py-2 text-center hover:bg-slate-200 transition-all duration-150 cursor-pointer"
                onClick={handleOpenCard}
              >
                <td className="py-2">{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.type}</td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* <div className="flex justify-center p-5">
        <div className="px-2 py-2 rounded-md shadow-md w-40 text-center text-lg text-white bg-gray-800 font-semibold cursor-pointer hover:bg-gray-700 duration-100 transition-all">
          Load More
        </div>
      </div> */}
    </div>
  );
};

export default UserList;
