import AboutUs from "../Pages/About/AboutUs";
import Banner from "../Pages/Home/Banner";

const About = () => {
  return (
    <div className="pt-20">
      <Banner
        heading={"About SweetTreats"}
        para={"Baking happiness, one cake at a time!"}
      />
      <AboutUs />
    </div>
  );
};

export default About;
