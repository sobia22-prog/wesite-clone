import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import CamperVans from "../components/sections/CamparVans";
import FAQSection from "../components/sections/FAQItem";
import GridSection from "../components/sections/GridSection";
import HeroCarousel from "../components/sections/HeroCarousel";
import HeroSection from "../components/sections/HeroSection";
import TestimonialSection from "../components/sections/Testimonial";


const Home = () => {
  return (
    <div>
      {/* Pass hasHero as true for transparent navbar */}
      <Navbar hasHero={true} />
      <HeroCarousel />
      <CamperVans />
      <HeroSection />
      <GridSection />
      <div className="pt-10 pl-10 pb-10 pr-5">
        <img src="assets/images/home.png"></img>
      </div>
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
