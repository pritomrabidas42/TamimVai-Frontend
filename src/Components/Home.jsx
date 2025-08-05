import React from "react";
import NewArrivals from "../Pages/Home/NewArrivals";
import HomeBanner from "../Pages/Home/HomeBanner";

const Home = () => {
  return (
    <div className="pt-20">
      <HomeBanner />
      <NewArrivals />
    </div>
  );
};

export default Home;
