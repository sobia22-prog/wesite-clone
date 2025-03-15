import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ExperienceNoovoSection from "../components/sections/ExperienceSection";
import FAQSection from "../components/sections/FAQItem";
import GridSection from "../components/sections/GridSection";
import ReviewHero from "../components/sections/ReviewsHero";
import SubSection from "../components/sections/SubscribeSection";
import TestimonialSection from "../components/sections/Testimonial";
import VideoReviews from "../components/sections/VideoReviews";


const Reviews = () => {
  return (
    <div>
      {/* Pass hasHero as true for transparent navbar */}
      <Navbar hasHero={false} />
      <ReviewHero />
      <VideoReviews />
      <SubSection />
      <ExperienceNoovoSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Reviews;
