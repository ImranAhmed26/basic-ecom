import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import { adminOptions } from "../../constants/sideNavOptions";

import Banner from "../../components/card/banner";
import { Context } from "../../context/authContext";
import SideNav from "../../components/common/sideNav";
import UserList from "../../components/list/userList";

const Users = () => {
  const router = useRouter();
  const { state } = useContext(Context);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")).type !== "admin") router.push("/");
  }, []);

  return (
    <div>
      <Banner>{<div>{`Hello ${state.user?.name}. Welcome to your Dashboard`}</div>}</Banner>
      <div className="mx-4 flex">
        <div className="hidden lg:block">
          <SideNav options={adminOptions} />
        </div>
        <div className="w-full">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Users;
