import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Power } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "assets/images/slide.jpeg",
    title: "Noovo Plus",
    restTitle: "America’s First 7' Camper.",
    subtitle:
      "With 7' headroom and an elevator bed, it offers luxury and comfort on every adventure",
  },
  {
    id: 2,
    image: "assets/images/slide2.jpg",
    title: "Noovo Lite",
    restTitle: "Essentials, Perfected",
    subtitle:
      "The basics done right: comfort, connection, and freedom for solo travelers and couples.",
  },
  {
    id: 3,
    image: "assets/images/slide5.png",
    title: "Noovo Pop",
    restTitle: " Adventure Together.",
    subtitle: "Step into our pop-top van, designed for up to 4 people to travel comfortably together.",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentIndex ? (
            <motion.div
              key={slide.id}
              className="absolute w-full h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.58)] flex flex-col items-start justify-end text-white p-16">
                {/* Animated Title with Underline */}
                <motion.h1
                  className="text-5xl font-bold mb-4 font-sans"
                  style={{ fontFamily: "Arial, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="relative inline-block">
                    {slide.title}
                    <motion.div
                      className="absolute left-0 bottom-0 h-[3px] bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                    />
                  </span>
                  <br />
                  {slide.restTitle}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-lg whitespace-pre-line font-sans"
                  style={{ fontFamily: "Arial, sans-serif" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="hidden md:flex space-x-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <button className="border px-5 py-2 rounded-full flex items-center transition group overflow-hidden relative bg-white text-black">
                    <span className="relative flex items-center">
                      Discover Pop
                      <svg
                        className="w-5 h-5 ml-2 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>

                  <button className="border px-5 py-2 rounded-full flex items-center transition bg-yellow-300 text-black group overflow-hidden">
                    <Power className="w-5 h-5 mr-2 text-black transition-all duration-300 group-hover:rotate-90" />
                    <span className="relative flex items-center">
                      Reserve your build
                      <svg
                        className="w-5 h-5 ml-2 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>

                </motion.div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
