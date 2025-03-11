import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaInstagram, FaPinterest, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function SidebarLayout({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-white p-8 space-y-4 border-r text-black">
        <button className="text-2xl" onClick={() => setIsOpen(false)}>
          <IoMdClose />
        </button>
        <nav className="space-y-2 text-3xl">
          <h2 className="font-semibold hover:underline">Our Models ›</h2>
          <ul className="space-y-1">
            <li className="hover-underline cursor-pointer">Inventory</li>
            <li className="hover-underline cursor-pointer">Find a Dealer</li>
            <li className="hover-underline cursor-pointer">Service</li>
            <li className="hover-underline cursor-pointer">Try Noovo</li>
          </ul>
          <ul className="mt-4 space-y-1 text-2xl">
            <li className="hover:font-bold"><a href="">Blog</a></li>
            <li className="hover:font-bold"><a href="">Events</a></li>
            <li className="hover:font-bold"><a href="">Our Mission</a></li>
            <li className="hover:font-bold"><a href="">Owner Resources</a></li>
            <li className="hover:font-bold"><a href="">Reviews</a></li>
            <li className="hover:font-bold"><a href="">FAQ</a></li>
            <li className="hover:font-bold"><a href="">Contact Us</a></li>
          </ul>
        </nav>
        <div className="mt-6 text-gray-600">
          <p>+1 (725) 215-2114</p>
          <p>contact@noovolife.com</p>
          <p>4495 Copper Sage St, Las Vegas, NV 89115</p>
        </div>
        <div className="mt-6 flex space-x-4 text-2xl text-gray-800">
          <h3 className="block">Follow Us:</h3>
          <FaInstagram className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8 relative">
        {/* Top Right Button */}
        <button className="absolute top-4 right-4 bg-black text-white px-6 py-2 rounded-full">
          Build Your Van
        </button>

        {/* Two Rows Layout */}
        <div className="space-y-6 mt-10">
          {/* Row 1 - Two Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card
              title="Noovo Lite"
              price="$162,700"
              monthly="$1,087/mo"
              image="assets/images/van4.png"
            />
            <Card
              title="Noovo Pop"
              price="$174,200"
              monthly="$1,164/mo"
              image="assets/images/van3.png"
            />
          </div>

          {/* Row 2 - Single Full-Width Card */}
          <div>
            <Card
              title="Noovo Plus"
              price="$186,700"
              monthly="$1,248/mo"
              image="assets/images/van1.png"
              isNew={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Card Component with Background Image & Hover Effect
function Card({ title, price, monthly, image, isNew }) {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
        {isNew && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>Starts at <strong>{price}</strong></p>
        <p>or from <strong>{monthly}</strong></p>
      </div>
    </div>
  );
}
