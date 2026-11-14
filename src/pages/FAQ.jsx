// src/pages/FAQ.jsx
import SectionHeading from "../components/SectionHeading";
import FAQAccordion from "../components/FAQAccordion";
import { faqs } from "../data/faqs";
import { useState } from "react";
import Button from "../components/Button";

export default function FAQ() {
  const [search, setSearch] = useState("");

  const filtered = faqs
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((i) => i.q.toLowerCase().includes(search.toLowerCase()))
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <SectionHeading
        title="Questions? We’ve got answers."
        subtitle="Find what you need, or ask us directly."
      />
      <div className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandViolet"
        />
      </div>
      {filtered.map((cat, i) => (
        <section key={i} className="mb-8">
          <h3 className="font-heading text-xl mb-4">{cat.category}</h3>
          <FAQAccordion items={cat.items} />
        </section>
      ))}
      <div className="text-center mt-12">
        <Button variant="primary">Still have questions? Contact us</Button>
      </div>
    </div>
  );
}
