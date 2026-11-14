// src/components/Button.jsx
import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", onClick, type = "button" }) {
  const base = "px-4 py-2 rounded-md font-medium transition-all disabled:opacity-50 disabled:pointer-events-none";
  const styles = {
    primary: "bg-gradient-to-r from-brandViolet to-brandIndigo text-white shadow-md hover:shadow-lg",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  }[variant];
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.button>
  );
}
