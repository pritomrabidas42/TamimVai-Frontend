import React from "react";
import Banner from "../Pages/Home/Banner";
import NewArrivals from "../Pages/Home/NewArrivals";

const Home = () => {
  return (
    <div className="pt-20">
      <Banner
        heading={"Welcome to SweetTreats"}
        para={"Delicious cakes for every occasion"}
      />
      <NewArrivals />
    </div>
  );
};

export default Home;
