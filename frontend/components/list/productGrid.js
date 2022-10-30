import Image from "next/image";
import React, { useState } from "react";

import { products } from "../../constants/productDummyData";
import ProductCard from "../common/productCard";

const ProductGrid = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenCard = () => {
    setVisible(true);
  };

  return (
    <div className=" px-10 py- mx-2  w-screen h-full ">
      <div className="text-2xl font-bold font-sans cursor-default">Shop</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-content-center w-full gap-y-4 gap-x-4 py-4">
        {products.product.map((item, index) => {
          return (
            <div key={index} className=" w-full " onClick={handleOpenCard}>
              <ProductCard
                image={item.image}
                title={item.name}
                details={item.details}
                price={`$${item.price}`}
              />
            </div>
          );
        })}
      </div>
      <ProductCard />
      <div className="flex justify-center p-5">
        <div className="px-2 py-2 rounded-md shadow-md w-40 text-center text-lg text-white bg-gray-800 font-semibold cursor-pointer hover:bg-gray-700 duration-100 transition-all">
          Load More
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
