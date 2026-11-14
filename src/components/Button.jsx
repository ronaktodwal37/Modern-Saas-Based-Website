import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary: "bg-brandViolet text-white hover:bg-brandIndigo shadow-md",
    secondary: "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50",
    outline: "border border-brandViolet text-brandViolet hover:bg-brandViolet hover:text-white",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.03 } : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </motion.button>
  );
}