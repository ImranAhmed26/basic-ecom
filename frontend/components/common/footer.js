import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/assets/logo-white.png";

const Footer = () => {
  return (
    <div className=" w-full text-[#e3e8e8] ">
      <div className="py-2 px-10 bg-[#4e37d2] flex items-center gap-4">
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={Logo} width={50} height={68.25} alt={"logo"} />
        </div>
        <h1 className="font-semibold text-xl text-center">Brand R.</h1>
      </div>
      <div className="bg-[#1c2431] w-full text-base font-medium text-left px-10 py-8 grid grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="">
          <div>Social</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Instagram</div>
        </div>

        <div>
          <div>
            <div>Contact</div>
          </div>
          <div>Our Information</div>
          <div>Return Policy</div>
          <div>Claim Report</div>
        </div>

        <div>
          <div>Customer Care</div>
          <div>FAQ & Helps</div>
          <div>Shipping & Delivery</div>
          <div>Return & Exchanges</div>
        </div>

        <div>
          <div>About Us</div>
          <div>FAQ & Helps</div>
          <div>Shipping & Delivery</div>
          <div>Return & Exchanges</div>
        </div>
      </div>
      <div className="text-lg text-center bg-[#151b29] py-5">
        Copyright &#169; 2022 | Brand R. Corporation
      </div>
    </div>
  );
};

export default Footer;
