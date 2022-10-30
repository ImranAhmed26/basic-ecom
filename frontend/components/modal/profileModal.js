import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../../context/authContext";
import {
  ChevronDownIcon,
  HeartIcon,
  ArrowLeftOnRectangleIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { GET } from "../../lib/api";

const data = [
  { name: "profile", value: "profile", icon: <UserIcon className="w-5" /> },
  { name: " Cart", value: "shoppingCart", icon: <ShoppingBagIcon className="w-5" /> },
  { name: "logout", value: "logout", icon: <ArrowLeftOnRectangleIcon className="w-5" /> },
];

const ProfileModal = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const handleClick = (value) => {
    const type = JSON.parse(localStorage.getItem("user")).type;
    value === "profile"
      ? router.push(`/${type}/dashboard`)
      : value === "logout"
      ? handleLogout()
      : "";
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    GET("/user/logout").then(({ data, status }) => {
      console.log(data);
    });
    router.push("/");
  };

  return (
    <div className="pt-1 rounded">
      <div
        name="data"
        className="bg-gradient-to-r from-indigo-200 to-violet-200 text-lg text-gray-500 font-semibold text-center rounded-md "
      >
        {data.map((item, index) => {
          return (
            <div
              className="p-2 text-lg font-semibold hover:text-gray-800 transition-all duration-75 cursor-pointer capitalize flex gap-1"
              value={item.value}
              key={index}
              onClick={() => handleClick(item.value)}
            >
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileModal;

{
  /* <Image
                  src={ProfileIcon}
                  width={40}
                  height={40}
                  alt={"DP"}
                  className="cursor-pointer"
                /> */
}

{
  /*  
  <Popover>
      {({ open }) => (
        <>
          <Popover.Button>Solutions</Popover.Button>

         
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
          
            <Popover.Panel static>
                <div isOpen={visible} onRequestClone={(setVisible = false)} className=" w-32 rounded">
      <div
        name="data"
        className="bg-gradient-to-r from-indigo-200 to-violet-200 text-lg text-gray-500 font-semibold text-center rounded-md "
      >
        {data.map((item, index) => {
          return (
            <div
              className="p-2 text-lg font-semibold hover:text-gray-800 transition-all duration-75 cursor-pointer capitalize "
              value={item.value}
              onClick={() => {}}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
    </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
*/
}
