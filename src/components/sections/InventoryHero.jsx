import { motion } from "framer-motion";

export default function HeroInventory() {
  return (
    <div className="min-h-screen mt-45 flex flex-col items-center px-6 md:px-20 py-10">
      {/* Hero Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 50 }} // Start below and invisible
        animate={{ opacity: 1, y: 0 }} // Animate up
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      >
        <h1 className="text-4xl md:text-6xl font-light text-black">
          Noovo Camper Van Inventory
        </h1>
        <p className="text-gray-600 mt-3 md:text-lg">
          Explore our new and used selection of road-ready Class B RVs for sale.<br />
          Nationwide shipping available.
        </p>
      </motion.div>
    </div>
  );
}
