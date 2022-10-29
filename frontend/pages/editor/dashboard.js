import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";

import Banner from "../../components/card/banner";
import ProfileDetails from "../../components/common/profileDetails";
import SideCategories from "../../components/common/sideCategories";
import ProductList from "../../components/list/productList";
import { Context } from "../../context/authContext";

const EditorDashboardPage = () => {
  const { state } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")).type !== "editor") router.push("/");
  }, []);

  return (
    <div>
      <Banner>{`Hello ${state.user?.name}. Welcome to your Dashboard`}</Banner>
      <div className="mx-4 flex">
        <div className="hidden lg:block">
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
};

export default EditorDashboardPage;
