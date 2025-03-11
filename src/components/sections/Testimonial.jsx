import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection = () => {
  const testimonials = [
    {
      rating: 5,
      name: "Jenna",
      quote:
        "After 2 years living on the road, I still can't think of any creature comforts I might be missing. The van honestly has everything.",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image: "assets/images/test1.png",
    },
    {
      rating: 5,
      name: "Mike",
      quote: "Best decision I've ever made.",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image: "assets/images/test2.png",
    },
    {
      rating: 5,
      name: "John & Sarah",
      quote: "Our van life has been simply incredible.",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image: "assets/images/test3.png",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Loved by those who believe adventure is mandatory.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const [showReview, setShowReview] = useState(false);

  return (
    <div
      className="bg-gray-100 p-6 rounded-lg relative"
      onMouseEnter={() => setShowReview(true)}
      onMouseLeave={() => setShowReview(false)}
    >
      <div className="mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-100 h-100 rounded-md object-cover mb-2"
        />
        <div className="flex items-center">
          <div className="flex">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-3 text-gray-600">({testimonial.rating})</span>
        </div>
      </div>
      <p className="font-semibold mb-2">{testimonial.name}</p>
      <p className="text-lg mb-4">{testimonial.quote}</p>
      <AnimatePresence>
        {showReview && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white p-4 rounded-lg z-5"
            key="review"
          >
            <p className="text-gray-800">{testimonial.review}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSection;