import Image from "next/image";
import React, { useState, useEffect } from "react";

import { GET } from "../../lib/api";
import { products } from "../../constants/productDummyData";
import ProductCard from "../common/productCard";
import ProductEditModal from "../modal/productEditModal";
import UserEditModal from "../modal/userEditModal";

const ProductList = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();
  const [user, setUser] = useState({});

  const handleOpenCard = () => {
    setVisible(true);
  };

  useEffect(() => {
    GET("/products").then(({ data, status }) => {
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
      <div className="text-2xl font-bold font-sans cursor-default w-full pb-6">Users</div>
      <div className="">
        <table className="min-w-full divide-y-2 divide-gray-200 rounded-md">
          <thead>
            <tr className="w-full bg-gray-700 rounded-md px-2 py-10 text-gray-100">
              <th className="py-2">Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`w-full px-6 py-2 text-center hover:bg-slate-300 hover:scale-[101%] hover:rounded-md transition-all duration-150 cursor-pointer ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-200"
                  }`}
                  onClick={() => {
                    handleOpenCard();
                    setUser(item);
                  }}
                >
                  <td className="py-2">{item.name}</td>
                  <td className="">{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ProductEditModal visible={visible} setVisible={setVisible} product={user} />
    </div>
  );
};

export default ProductList;
