// src/pages/About.jsx
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <SectionHeading
        title="Building a more productive tomorrow."
        subtitle="At FlowPilot, we believe in the power of focused work, smart tools, and great teams."
      />
      <section className="mb-12">
        <h3 className="font-heading text-xl mb-4">Our Story</h3>
        <p className="text-mutedSlate">
          FlowPilot started when a group of founders grew frustrated with the endless maze of task apps. They wanted a single, elegant space where ideas turn into actions without friction.
        </p>
      </section>
      <section className="mb-12">
        <h3 className="font-heading text-xl mb-4">Our Mission</h3>
        <p className="text-mutedSlate">Make work simpler, smarter, and more organised for every team, no matter the size.</p>
      </section>
      <section className="mb-12">
        <h3 className="font-heading text-xl mb-4">Our Vision</h3>
        <p className="text-mutedSlate">A world where teams spend less time on admin and more time on meaningful creation.</p>
      </section>
      <section className="mb-12">
        <h3 className="font-heading text-xl mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-mutedSlate space-y-1">
          <li>Innovation</li>
          <li>People First</li>
          <li>Continuous Improvement</li>
          <li>Transparency</li>
          <li>Impact Driven</li>
        </ul>
      </section>
      <section className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-white rounded-lg shadow-card">
          <h4 className="font-heading text-2xl text-deepNavy">10K+</h4>
          <p className="text-mutedSlate">Active Teams</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-card">
          <h4 className="font-heading text-2xl text-deepNavy">99.9%</h4>
          <p className="text-mutedSlate">Platform Uptime</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-card">
          <h4 className="font-heading text-2xl text-deepNavy">4.8/5</h4>
          <p className="text-mutedSlate">User Rating</p>
        </div>
      </section>
      <div className="mt-12 text-center">
        <Button variant="primary">Contact Us</Button>
      </div>
    </div>
  );
}
