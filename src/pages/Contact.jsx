import { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Mail, MapPin, Phone } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.58)] z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center">Send us a message.</h2>
        <p className="text-gray-500 text-center">Got questions? Need to chat with an expert?</p>

        {/* Buttons */}
        <div className="mt-6 space-y-3">
          <button className="flex items-center gap-3 w-full px-4 py-3 border rounded-md hover:bg-gray-100">
            <Calendar size={20} /> Schedule a call
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 border rounded-md hover:bg-gray-100">
            <Mail size={20} /> Send us a message
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 border rounded-md hover:bg-gray-100">
            <MapPin size={20} /> Come visit us
          </button>
        </div>

        {/* Phone Contact */}
        <p className="mt-4 text-center text-gray-600 flex items-center justify-center gap-2">
          <Phone size={18} /> Call us on <a href="tel:+17025180053" className="text-blue-500 font-semibold">+1-702-518-0053</a>
        </p>
      </motion.div>
    </div>
  );
}
