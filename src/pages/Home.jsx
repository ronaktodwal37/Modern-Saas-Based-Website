// src/pages/Home.jsx
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import DashboardPreview from "../components/DashboardPreview";
import { features } from "../data/features";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-brandViolet text-white px-3 py-1 rounded-full text-sm mb-4"
          >
            THE FUTURE OF WORK MANAGEMENT
          </motion.div>

          <h1 className="font-heading text-5xl md:text-6xl text-deepNavy mb-6">
            Your Workflows.
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandViolet to-brandIndigo">
              Reimagined.
            </span>
          </h1>

          <p className="text-lg text-mutedSlate mb-6 max-w-lg">
            Stop juggling tasks and scattered tools. Bring your projects,
            people, and productivity together with FlowPilot.
          </p>

          <div className="flex gap-4">
            <Button variant="primary">Start Free Trial</Button>
            <Button variant="secondary">Watch Demo</Button>
          </div>

          <p className="mt-6 text-sm text-mutedSlate">
            Trusted by 10K+ teams
          </p>
        </div>

        <div className="flex justify-center">
          <DashboardPreview />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="mb-20">
        <SectionHeading
          title="Powerful features, simple to use"
          subtitle="Everything you need to run a modern SaaS workflow"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(0, 4).map((f) => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="mb-20 text-center">
        <h3 className="font-heading text-2xl text-deepNavy mb-4">
          Trusted by ambitious teams
        </h3>
        <div className="flex justify-center gap-8 mb-6">
          {/* Placeholder logos – replace with real images later */}
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
        </div>
        <p className="text-mutedSlate">
          “FlowPilot transformed how we manage projects. It’s sleek, fast,
          and unbelievably intuitive.”
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-primaryBg py-12 rounded-xl shadow-card">
        <h2 className="font-heading text-3xl text-deepNavy mb-4 text-center">
          Ready to make work flow?
        </h2>
        <p className="text-center text-mutedSlate mb-6">
          Bring clarity to your workday and give your team the tools to do its
          best work.
        </p>
        <div className="flex justify-center">
          {/* <Button variant="primary">Get Started</Button> */}
        </div>
      </section>
    </div>
  );
}
