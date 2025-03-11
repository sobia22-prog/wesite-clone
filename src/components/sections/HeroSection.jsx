import { Mail, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center text-white text-center pt-10 px-6 bg-[rgba(0,0,0,0.58)]">
      {/* Background GIF */}
      <img
        src="assets/gifs/hero.gif"
        alt="Background GIF"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Small label */}
        <div className="text-sm font-medium uppercase bg-black text-white py-1 px-3 rounded-full inline-block mb-4">
          Made by you, for you.
        </div>

        {/* Main Heading */}
        <h1 className="text-base md:text-2xl font-medium leading-tight max-w-4xl text-white bg-[rgba(0,0,0,0.58)] rounded-full">
          <span className="underline">Custom-built vans</span> made in the US with{" "}
          European craftsmanship, innovative design, & all the comforts of home.
        </h1>


        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-lg text-lg transition-all duration-300 hover:pr-6 hover:pl-4">
            <img
              src="assets/images/van-black.png"
              alt="Van Icon"
              className="w-6 h-6"
            />
            Build your Noovo Van
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-lg text-lg transition-all duration-300 hover:pr-6 hover:pl-4">
            <Mail className="w-5 h-5" />
            Contact us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
