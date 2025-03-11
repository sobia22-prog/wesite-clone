import { useState } from "react";
import { motion } from "framer-motion";

const inventoryItems = [
  {
    id: 1,
    owner: "Peter",
    name: "Plus, 2024",
    price: "$186,700",
    oldPrice: null,
    monthly: "$1,248/mo",
    image: "assets/images/slide1.jpg",
    status: "In Stock",
    details: {
      condition: "New",
      vin: "3C6MRVZG2PE593616",
      exterior: "Granite",
      battery: "660Ah Lithium Battery Pack",
      sleep: "Up to 4 people",
      location: "Las Vegas, NV",
    },
  },
  {
    id: 2,
    owner: "Lila",
    name: "Lite, 2024",
    price: "$149,700",
    oldPrice: "$162,700",
    monthly: "$999/mo",
    image: "assets/images/slide2.jpg",
    status: "In Stock",
    details: {
      condition: "Used",
      vin: "3C6MRVJGXPE574890",
      exterior: "Granite",
      battery: "660Ah Lithium Battery Pack",
      sleep: "Up to 2 people",
      location: "Las Vegas, NV",
    },
  },
  {
    id: 3,
    owner: "Ruby",
    name: "Lite, 2024",
    price: "$149,700",
    oldPrice: "$162,700",
    monthly: "$999/mo",
    image: "assets/images/slide2.jpg",
    status: "In Stock",
    details: {
      condition: "Used",
      vin: "3C6MRVJGXPE574890",
      exterior: "Sand",
      battery: "660Ah Lithium Battery Pack",
      sleep: "Up to 2 people",
      location: "Las Vegas, NV",
    },
  },
  {
    id: 4,
    owner: "Neil",
    name: "Pop, 2024",
    price: "$149,700",
    oldPrice: "$162,700",
    monthly: "$999/mo",
    image: "assets/images/slide2.jpg",
    status: "In Stock",
    details: {
      condition: "Used",
      vin: "3C6MRVJGXPE574890",
      exterior: "Granite",
      battery: "660Ah Lithium Battery Pack",
      sleep: "Up to 2 people",
      location: "Las Vegas, NV",
    },
  },
  {
    id: 5,
    owner: "Georgia",
    name: "Plus, 2024",
    price: "$149,700",
    oldPrice: "$162,700",
    monthly: "$999/mo",
    image: "assets/images/slide2.jpg",
    status: "In Stock",
    details: {
      condition: "Used",
      vin: "3C6MRVJGXPE574890",
      exterior: "Silver",
      battery: "660Ah Lithium Battery Pack",
      sleep: "Up to 2 people",
      location: "Las Vegas, NV",
    },
  },
];

export default function InventoryItems() {
  const [selectedModel, setSelectedModel] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  const filteredItems = inventoryItems.filter((item) => {
    const matchesModel = selectedModel === "All" || item.name.includes(selectedModel);
    const matchesColor = selectedColor === "All" || item.details.exterior === selectedColor;
    return matchesModel && matchesColor;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
      {/* Left Sidebar - Sticky Filters */}
      <div className="md:col-span-1 sticky top-6 h-fit p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Models</h2>
        <div className="flex flex-col gap-2">
          {["All", "Lite", "Plus", "Pop"].map((filter) => (
            <button
              key={filter}
              className={`p-2 rounded-md ${selectedModel === filter ? "bg-black text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedModel(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-4 mt-6">Exterior Color</h2>
        <div className="flex flex-col gap-2">
          {["All", "Grey", "Sand", "Granite", "Silver"].map((color) => (
            <button
              key={color}
              className={`p-2 rounded-md ${selectedColor === color ? "bg-black text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Inventory Cards */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Image with Hover Zoom Effect */}
            <div className="relative group overflow-hidden">
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-md z-10">
                {item.status}
              </span>
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                <h5 className="text-gray-200 text-md">{item.owner}</h5>
                <h3 className="text-white text-xl font-semibold">{item.name}</h3>
                <p className="text-white text-lg">
                  <strong>{item.price}</strong>{" "}
                  {item.oldPrice && <span className="line-through text-red-400 ml-2">{item.oldPrice}</span>}
                </p>
              </div>
            </div>
            <div className="p-6">
              <ul className="text-base text-gray-700 mt-3 leading-relaxed">
                <li><strong>New/Used:</strong> {item.details.condition}</li>
                <li><strong>VIN:</strong> {item.details.vin}</li>
                <li><strong>Exterior Color:</strong> {item.details.exterior}</li>
                <li><strong>Battery:</strong> {item.details.battery}</li>
                <li><strong>Sleep Capacity:</strong> {item.details.sleep}</li>
                <li><strong>Location:</strong> {item.details.location}</li>
              </ul>
              <button className="mt-5 w-full bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800">
                Get more information →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
