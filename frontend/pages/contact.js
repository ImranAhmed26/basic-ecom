import React from "react";
import Banner from "../components/card/banner";
import ContactSendMsg from "../components/card/contactSendMsg";

const contact = () => {
  return (
    <div>
      <Banner>{<div>Get in touch with us</div>}</Banner>
      <ContactSendMsg />
    </div>
  );
};

export default contact;
