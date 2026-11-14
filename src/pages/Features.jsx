// src/pages/Features.jsx
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import { features } from "../data/features";
import Button from "../components/Button";

export default function Features() {
  return (
    <div className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <SectionHeading
        title="One Workspace. Endless Possibilities."
        subtitle="Everything you need to plan, organise, automate, and grow – all in one place."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.id} {...f} />
        ))}
      </div>
      <section className="mt-20 text-center">
        <Button variant="primary">Get Started</Button>
      </section>
    </div>
  );
}
