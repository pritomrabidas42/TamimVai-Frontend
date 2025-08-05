import AboutUs from "../Pages/About/AboutUs";
import Banner from "./Banner";

const About = () => {
  return (
    <div className=" pt-16">
      <Banner
        heading={"About SweetTreats"}
        para={"Baking happiness, one cake at a time!"}
      />
      <AboutUs />
    </div>
  );
};

export default About;
