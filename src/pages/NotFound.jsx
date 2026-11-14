// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-primaryBg p-4 text-center">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-6xl font-heading text-deepNavy mb-4"
      >
        404
      </motion.h1>
      <p className="text-lg text-mutedSlate mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-brandViolet to-brandIndigo text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
      >
        Go Home
      </Link>
    </section>
  );
}
