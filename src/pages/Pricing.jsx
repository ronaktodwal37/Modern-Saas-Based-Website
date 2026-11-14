// src/pages/Pricing.jsx
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import PricingCard from "../components/PricingCard";
import { pricingPlans } from "../data/pricing";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  return (
    <div className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <SectionHeading
        title="Simple plans. Serious productivity."
        subtitle="Choose the perfect plan for your team and start building better workflows today."
      />
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 ${billing === "monthly" ? "bg-brandViolet text-white rounded-l" : "bg-gray-200 text-gray-800 rounded-l"}`}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 ${billing === "yearly" ? "bg-brandViolet text-white rounded-r" : "bg-gray-200 text-gray-800 rounded-r"}`}
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {pricingPlans.map((plan) => {
          const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
          const period = billing === "monthly" ? "mo" : "yr";
          return (
            <PricingCard
              key={plan.id}
              plan={plan.name}
              price={price}
              period={period}
              features={plan.features}
              badge={plan.badge}
              cta={plan.cta}
              link={plan.link}
              selected={plan.id === "professional"}
            />
          );
        })}
      </div>
    </div>
  );
}
