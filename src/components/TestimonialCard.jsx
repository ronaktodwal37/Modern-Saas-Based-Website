// src/components/TestimonialCard.jsx
import { motion } from "framer-motion";

export default function TestimonialCard({ avatar, name, role, quote }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg p-6 shadow-card border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-3" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-mutedSlate">{role}</p>
        </div>
      </div>
      <p className="italic text-gray-700">“{quote}”</p>
    </motion.div>
  );
}
