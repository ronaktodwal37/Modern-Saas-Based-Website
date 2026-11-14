// src/components/FAQAccordion.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(i === openIndex ? null : i);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="border-b pb-2">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => toggle(i)}
          >
            <span className="font-medium">{item.q}</span>
            {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 text-gray-600"
              >
                {item.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
