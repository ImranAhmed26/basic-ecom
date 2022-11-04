import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GET } from "../../lib/api";
import ProductEditModal from "../modal/productEditModal";
import ProductAddModal from "../modal/productAddModal";

const ProductList = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [data, setData] = useState();
  const [product, setProduct] = useState({});

  const handleOpenCard = () => {
    setVisible(true);
  };
  const showProductAddModal = () => {
    setVisible2(true);
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
      <div className="flex justify-between w-full pr-2">
        <div className="text-2xl font-bold font-sans cursor-default pb-">Products</div>
        <div
          className="text-2xl  font-sans px-2 py-1 mb-2 bg-slate-600 hover:bg-slate-700 rounded-md cursor-pointer transition-all duration-150 text-gray-100"
          onClick={() => {
            showProductAddModal();
          }}
        >
          Add Products
        </div>
      </div>
      <div className="  p-2">
        <table className="min-w-full  divide-gray-200  ">
          <thead className="">
            <tr className="w-full bg-gray-700   text-gray-100">
              <th className="py-2  ">Name</th>
              <th className="max-w-sm">Description</th>
              <th>Category</th>
              <th>Price</th>
              <th className="py-2 ">type</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`w-full px-6 py-2 text-center  hover:bg-slate-300 hover:scale-[101%] transition-all duration-150 cursor-pointer ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-200"
                  }`}
                  onClick={() => {
                    handleOpenCard();
                    setProduct(item);
                  }}
                >
                  <td className="py-2 ">{item.name}</td>
                  <td className="max-w-sm">{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.unitPrice}</td>
                  <td className="pr-2">{item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ProductAddModal visible={visible2} setVisible={setVisible2} />
      <ProductEditModal visible={visible} setVisible={setVisible} product={product} />
    </div>
  );
};

export default ProductList;
