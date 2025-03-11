import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CamperVans = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const vans = [
    {
      name: "Noovo Plus",
      price: "$186,700",
      monthly: "$1,248/mo",
      img: "assets/images/van2.png",
    },
    {
      name: "Noovo Lite",
      price: "$162,700",
      monthly: "$1,087/mo",
      img: "assets/images/van3.png",
    },
    {
      name: "Noovo Pop",
      price: "$174,200",
      monthly: "$1,164/mo",
      img: "assets/images/van4.png",
    },
    {
      buttonText: "See full inventory",
      img: "assets/images/van-for-sale.jpg",
    }
  ];

  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-semibold relative inline-block">
        We build camper vans
        <br />
        people{" "}
        <span className="relative">
          actually
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-black transition-transform duration-500 ${isActive ? "w-full scale-x-100" : "w-0 scale-x-0"
              }`}
          />
        </span>{" "}
        want to live in.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ml-60 mr-70">
        {vans.map((van, index) => (
          <div
            key={index}
            className="relative w-full max-w-md h-[500px] rounded-xl shadow-lg overflow-hidden bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url(${van.img})` }}
          >
            {/* RGBA Overlay only for last card */}
            {index === vans.length - 1 && (
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.58)]"></div>
            )}

            <div
              className={`absolute inset-0 flex ${van.price ? "flex-col justify-start p-6" : "justify-center items-center"
                }`}
            >
              {van.price ? (
                <>
                  <h3 className="text-2xl font-bold">{van.name}</h3>
                  <p className="text-lg">
                    Starts at {van.price} <br /> or from {van.monthly}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full transition-all duration-300 hover:pr-6 hover:pl-4">
                      Explore {van.name.split(" ")[1]}
                      <ArrowRight className="w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                    <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:pr-6 hover:pl-4">
                      See inventory
                      <ArrowRight className="w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                  </div>
                </>
              ) : (
                <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:pr-6 hover:pl-4">
                  {van.buttonText}
                  <ArrowRight className="w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CamperVans;
