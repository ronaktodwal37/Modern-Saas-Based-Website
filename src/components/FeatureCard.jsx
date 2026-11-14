// src/components/FeatureCard.jsx
import { motion } from "framer-motion";
import { CheckSquare, Zap, Users, BarChart2, Layers, Bell } from "lucide-react";

const icons = {
  CheckSquare,
  Zap,
  Users,
  BarChart2,
  Layers,
  Bell,
};

export default function FeatureCard({ title, description, icon }) {
  const Icon = icons[icon] || CheckSquare;
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-lg p-6 shadow-card border border-gray-100"
    >
      <Icon className="h-8 w-8 text-brandViolet mb-4" />
      <h3 className="font-heading text-xl mb-2">{title}</h3>
      <p className="text-mutedSlate">{description}</p>
    </motion.div>
  );
}
