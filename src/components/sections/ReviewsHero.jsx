import React from 'react';
import { motion } from 'framer-motion';

const ReviewHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white py-20 mt-40 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl font-light mb-8" style={{ fontFamily: 'sans-serif' }}>
          Reviews videos from community
        </h2>
        <p className="text-xl text-gray-600 font-light" style={{ fontFamily: 'sans-serif' }}>
          Dive into Noovo's community videos, where each piece of content reflects authentic experiences.
          Discover testimonials from real customers sharing their interactions with our products and services.
        </p>
      </div>
    </motion.section>
  );
};

export default ReviewHero;