import { FaStar } from "react-icons/fa";
import { FaInstagram, FaPinterest, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function UpperFooter() {
  return (
    <div className="bg-white text-black py-16 px-6 lg:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Subscription Form */}
        <div className=" mr-10">
          <h3 className="text-lg font-medium mb-4 w-60">
            Subscribe to learn about our latest news, updates, and adventures.
          </h3><br />
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your First Name*"
              className="w-60 bg-gray-100 p-3 rounded-full outline-none text-gray-700"
            /><br />
            <input
              type="email"
              placeholder="Your Email*"
              className="w-60 bg-gray-100 p-3 rounded-full outline-none text-gray-700"
            /><br />
            <input
              type="text"
              placeholder="Zip Code*"
              className="w-60 bg-gray-100 p-3 rounded-full outline-none text-gray-700"
            /><br />
            <button
              type="submit"
              className="w-60 bg-black text-white p-3 rounded-full hover:opacity-80"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Testimonial and Navigation Section */}
        <div className="flex flex-col gap-12">
          {/* Testimonial Section */}
          <div>
            <div className="flex items-center space-x-2 text-lg text-black">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} className="text-black" />
              ))}
              <span className="text-gray-700 text-sm">5/5 on <strong>Google</strong></span>
            </div>
            <p className="text-4xl font-bold leading-relaxed mt-4">
              “I love your build because you made it for people like us who don't
              know what we're doing. It just works.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="assets/images/footer.jpeg"
                alt="Jane"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Jane, Traveling nurse</p>
                <p className="text-gray-500 text-sm">Over 2700 miles traveled from Las Vegas</p>
              </div>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 text-sm textblack">
            <div>
              <h4 className="font-semibold mb-3">Buy</h4>
              <ul className="space-y-2">
                <li><a href="#">Inventory</a></li>
                <li><a href="#">Rentals</a></li>
                <li><a href="#">Find a Dealer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Models</h4>
              <ul className="space-y-2">
                <li><a href="#">The Lite</a></li>
                <li><a href="#">The Pop</a></li>
                <li><a href="#">The Plus</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Help Me Choose</h4>
              <ul className="space-y-2">
                <li><a href="#">Configure</a></li>
                <li><a href="#">Brochures</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Noovo</h4>
              <ul className="space-y-2">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div><br />

      <div className="border-t border-gray-300   text-sm text-black  mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Logo & Address */}
        <div className="md:w-1/3 text-left justify-left mt-13">
          <img src="assets/images/logo.png" alt="Noovo" className="h-15 mb-2" />
          <div className="space-y-2">
            <p className="flex items-center space-x-2">
              <span>📞</span> <span>+1 702 518 0053</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>📧</span> <span>contact@noovolife.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>📍</span> <span>4495 Copper Sage St, Las Vegas, NV 89115</span>
            </p>
          </div>
          <p className="text-xs mt-4">
            Noovo provides the information on this website for general purposes only. We make no guarantees or warranties, express or implied, regarding the accuracy, reliability, or availability of the information, products, services, or related graphics and renderings on this site for any purpose.
          </p>
        </div>

        {/* Middle Section - Social Icons, Links, and Copyright */}
        <div className="md:w-1/3 flex flex-col items-center text-center mt-50">
          <div className="flex space-x-4 text-xl mb-4">
            <FaInstagram className="cursor-pointer" />
            <FaPinterest className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
          </div>
          <div className="space-x-4 ">
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <p className="mt-2">© 2025 Noovo. All Rights Reserved.</p>
        </div>

        {/* Right Section - Made by */}
        <div className="md:w-1/3 text-right mt-70">
          <p className="text-xs mt-1">Made by <span className="font-semibold">Sobia</span></p>
        </div>
      </div>
    </div>
  );
}