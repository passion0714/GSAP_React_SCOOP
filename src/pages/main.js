import FV from "../components/FV";
import Service from "../components/Service";
import Blog from "../components/Blog";
import Mission from "../components/Mission";
import MoreServices from "../components/MoreServices";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <div >
      <FV />
      <Service />
      <Mission />
      <Blog />
      <MoreServices propHeight="132px" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
