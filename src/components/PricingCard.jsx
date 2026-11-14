// src/components/PricingCard.jsx
import { motion } from "framer-motion";

export default function PricingCard({
  plan,
  price,
  period,
  features,
  badge,
  cta,
  link,
  selected,
}) {
  return (
    <motion.div
      layout
      className={`border rounded-lg p-6 flex flex-col ${selected ? "border-brandViolet shadow-lg" : "border-gray-200"} bg-white`}
    >
      {badge && (
        <div className="self-start bg-brandViolet text-white px-2 py-0.5 rounded-full text-xs mb-2">
          {badge}
        </div>
      )}
      <h3 className="font-heading text-2xl mb-2">{plan}</h3>
      <p className="text-3xl font-bold mb-4">
        ${price}
        <span className="text-base font-medium text-mutedSlate">/{period}</span>
      </p>
      <ul className="flex-1 space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <svg className="h-4 w-4 text-brandViolet mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {f}
          </li>
        ))}
      </ul>
      <a href={link}>
        <button className="bg-gradient-to-r from-brandViolet to-brandIndigo text-white px-4 py-2 rounded-full w-full hover:shadow-md transition-shadow">
          {cta}
        </button>
      </a>
    </motion.div>
  );
}
