import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GridSection = () => {
  const features = [
    {
      title: "Craftsmanship",
      description: "Detailed description of craftsmanship...",
      image: "assets/images/grid1.png",
    },
    {
      title: "Off-grid capacity",
      description: "Detailed description of off-grid capacity...",
      image: "assets/images/grid2.png",
    },
    {
      title: "Full size bathroom",
      description: "Say goodbye to gas station bathrooms with your own permanent flushable toilet and instant hot shower right in your van.",
      video: "assets/gifs/gridvideo.webm",
    },
    {
      title: "Smart storage",
      description: "Detailed description of smart storage...",
      image: "assets/images/grid4.png",
    },
    {
      title: "Comfort",
      description: "Detailed description of comfort...",
      image: "assets/images/grid5.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, features.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold">The best camper van for full-time living.</h2>
          </div>
          <div className="w-1/2">
            <p className="text-lg">From the kitchen and bath to the bedroom and workspace, every detail is meticulously designed with a custom touch, even for the family pup.</p>
          </div>
        </div>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 28}%)`,
              marginLeft: "8%" // Increased left margin for initial card placement
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="w-1/4 flex-shrink-0 px-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card feature={feature} />
              </motion.div>
            ))}
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
            <button
              className={`text-white p-2 rounded-full ${currentIndex === 0 ? "opacity-50 cursor-default" : "hover:bg-gray-700"}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className={`text-white p-2 rounded-full ${currentIndex === features.length - 1 ? "opacity-50 cursor-default" : "hover:bg-gray-700"}`}
              onClick={nextSlide}
              disabled={currentIndex === features.length - 1}
            >
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ feature }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="bg-gray-700 rounded-lg overflow-hidden relative"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      {feature.image && <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover" />}
      {feature.video && (
        <video src={feature.video} controls autoPlay loop muted className="w-full h-64 object-cover" />
      )}
      <div className="p-4 relative">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {feature.title}
          <span className="text-2xl">+</span>
        </h3>
        <AnimatePresence>
          {showDescription && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="text-sm bg-white text-black p-4 rounded-md absolute left-0 right-0 bottom-0"
              key="description"
            >
              {feature.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GridSection;