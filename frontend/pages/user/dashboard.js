import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import Banner from "../../components/card/banner";
import ProfileDetails from "../../components/common/profileDetails";
import SideCategories from "../../components/common/sideCategories";
import ProductList from "../../components/list/productList";

import { Context } from "../../context/authContext";

const UserDashboardPage = () => {
  const { state } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")).type !== "user") router.push("/");
  }, []);

  return (
    <div>
      <Banner>{<div>{`Hello ${state.user?.name}. Welcome to your Dashboard`}</div>}</Banner>
      <div className="mx-4 flex">
        <div className="hidden lg:block">
          <ProfileDetails />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
