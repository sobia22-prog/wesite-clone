import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import ContactModal from "../../pages/Contact";
import logoBlack from "/assets/images/logo-black.png";
import logoWhite from "/assets/images/logo-white.png";

const Navbar = ({ hasHero }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Contact modal state

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = hasHero && !isScrolled;
  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isTransparent ? "bg-transparent text-white" : "bg-white text-black"
    }`;

  return (
    <>
      <header className={navbarClasses}>
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Announcement Bar */}
        <div className="bg-gray-100/70 text-center text-sm py-2 text-black md:m-6 rounded-lg">
          Join us early March at the{" "}
          <a href="#" className="font-semibold underline">Ocala RV Show</a> and{" "}
          <a href="#" className="font-semibold underline">Peace Love and Vans event in Florida!</a>
        </div>

        {/* Main Navbar */}
        <div className="w-full px-6 py-4 flex items-center justify-between relative">
          {/* Sidebar Toggle Button */}
          <button className="absolute top-4 left-4 z-[9999] bg-black rounded-md text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={28} /> : <FaBars size={28} />}
          </button>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={isTransparent ? logoWhite : logoBlack} alt="Noovo Logo" className="h-30" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-md font-medium ml-15">
            {/* Our Models Dropdown */}
            <div className="relative group">
              <button className="hover:underline transition-all duration-200 flex items-center gap-1"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}>
                Our Models
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg rounded-md border border-gray-200 p-6 flex"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {/* Left Section */}
                  <div className="w-1/3 pr-6">
                    <h3 className="text-2xl font-semibold text-black">Our Models</h3>
                    <p className="text-gray-600 mt-2">
                      Custom-built in America with European craftsmanship, modern design, and the comforts of home.
                    </p>
                  </div>

                  {/* Model Cards */}
                  <div className="w-full grid grid-cols-3 gap-4">
                    {[
                      { title: "Noovo Lite", price: "$162,700", monthly: "$1,087/mo", img: "assets/images/van4.png", link: "/noovo-lite" },
                      { title: "Noovo Pop", price: "$174,200", monthly: "$1,164/mo", img: "assets/images/van2.png", link: "/noovo-pop" },
                      { title: "Noovo Plus", price: "$186,700", monthly: "$1,248/mo", img: "assets/images/van3.png", link: "/noovo-plus" },
                    ].map((model, index) => (
                      <Link key={index} to={model.link} className="relative h-56 bg-cover bg-center rounded-md overflow-hidden group"
                        style={{ backgroundImage: `url(${model.img})` }}>
                        <div className="absolute inset-0 bg-black/30 transition-transform scale-100 group-hover:scale-110"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="text-lg font-semibold">{model.title}</h4>
                          <p className="text-sm">Starts at {model.price}</p>
                          <p className="text-sm">or from {model.monthly}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            {["Inventory", "Blog", "Reviews"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="hover:underline transition-all duration-200">
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex space-x-4">
            {/* Contact Us Button (opens modal) */}
            <button onClick={() => setIsModalOpen(true)} className="border px-5 py-2 rounded-full flex items-center bg-white text-black transition group overflow-hidden relative">
              <span className="relative flex items-center">
                Contact us
                <svg className="w-5 h-5 ml-2 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            {/* Build Your Van */}
            <button className="border px-5 py-2 rounded-full flex items-center hover:bg-gray-200 transition bg-white text-black group overflow-hidden">
              <img src="/assets/images/van-black.png" alt="Van Icon" className="h-11 pr-4" />
              <span className="relative flex items-center">
                Build your van
                <svg className="w-5 h-5 ml-2 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Contact Modal Component */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
