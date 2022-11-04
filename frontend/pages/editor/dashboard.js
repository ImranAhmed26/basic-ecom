import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";

import Banner from "../../components/card/banner";
import { Context } from "../../context/authContext";
import { editorOptions } from "../../constants/sideNavOptions";
import ProfileDetails from "../../components/common/profileDetails";
import SideNav from "../../components/common/sideNav";

const EditorDashboardPage = () => {
  const router = useRouter();
  const { state } = useContext(Context);
  // console.log(state);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")).type !== "editor") router.push("/");
  }, []);

  return (
    <div>
      <Banner>{`Hello ${state.user?.name}. Welcome to your Dashboard`}</Banner>
      <div className="mx-4 flex">
        <div className="hidden lg:block">
          <SideNav options={editorOptions} />
        </div>
          <ProfileDetails />
      </div>
    </div>
  );
};

export default EditorDashboardPage;
