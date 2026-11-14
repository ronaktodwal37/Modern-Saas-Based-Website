// src/components/SectionHeading.jsx
import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-heading text-deepNavy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-mutedSlate">{subtitle}</p>
      )}
    </motion.div>
  );
}
