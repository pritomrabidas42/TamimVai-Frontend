import React from "react";
import Banner from "../Pages/Home/Banner";
import Information from "../Pages/Contact/Information";
import Form from "../Pages/Contact/Form";
import Map from "../Pages/Contact/Map";

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
