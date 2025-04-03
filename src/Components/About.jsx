import Choose from "../Pages/About/Choose";
import Contact from "../Pages/About/Contact";
import Story from "../Pages/About/Story";
import Testimonials from "../Pages/About/Testimonials";
import Banner from "../Pages/Home/Banner";

const About = () => {
  return (
    <div className="pt-20">
      <Banner
        heading={"About SweetTreats"}
        para={"Baking happiness, one cake at a time!"}
      />
      <Story />
      <Choose />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default About;
