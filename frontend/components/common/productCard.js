import Image from "next/image";
import React from "react";

const ProductCard = ({ image, title, details, price }) => {
  return (
    <div>
      <div className="rounded-md hover:shadow-md hover:scale-[1.03] transition-all duration-300 group cursor-pointer">
        <div className="text-center h-full rounded-md ">
          <div className="w-full h-[75%] rounded-md ">
            <Image src={image} className="rounded-t-md" />
          </div>
          <div className="text-left px-4 py-4 flex flex-col gap-1 ">
            <div className="text-lg font-semibold h-6 overflow-clip">{title}</div>
            <div className="text-sm font-normal h-6 overflow-clip py-1">{details}</div>
            <div className="text-lg font-bold ">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
