import React from "react";
import Information from "../Pages/Contact/Information";
import Form from "../Pages/Contact/Form";
import Map from "../Pages/Contact/Map";
import Banner from "./Banner";

const Contact = () => {
  return (
    <div className="md:pt-20 pt-16">
      <Banner
        heading={"Contact SweetTreats"}
        para={"We'd love to hear from you!"}
      />
      <Information />
      <Form />
      <Map />
    </div>
  );
};

export default Contact;
