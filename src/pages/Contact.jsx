// src/pages/Contact.jsx
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";
import Button from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: ""
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all required fields.');
      return;
    }
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
      <SectionHeading
        title="Ready to transform your workflow?"
        subtitle="Request a demo and see how FlowPilot can help your team work smarter."
      />
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Info */}
        <div className="space-y-4">
          <p className="font-medium">Personalized Demo</p>
          <p className="text-mutedSlate">Expert Guidance – No Commitment</p>
          <p>
            <a href="mailto:hello@flowpilot.com" className="text-brandViolet underline">hello@flowpilot.com</a>
          </p>
          <p>123 Innovation Drive, San Francisco, CA</p>
          <p>+1 (555) 123-4567</p>
          <div className="flex space-x-4 mt-4">
            {/* Placeholder social icons */}
            <svg className="h-6 w-6 text-gray-600" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
            <svg className="h-6 w-6 text-gray-600" fill="currentColor"><rect width="20" height="14" x="2" y="5" rx="2" /></svg>
            <svg className="h-6 w-6 text-gray-600" fill="currentColor"><polygon points="12,2 2,22 22,22" /></svg>
          </div>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandViolet" required />
            <input name="email" type="email" placeholder="Work Email *" value={form.email} onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandViolet" required />
          </div>
          <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandViolet" />
          <select name="interest" value={form.interest} onChange={handleChange} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandViolet">
            <option value="">Your Interest (optional)</option>
            <option value="demo">Demo Request</option>
            <option value="pricing">Pricing Info</option>
            <option value="partnership">Partnership</option>
          </select>
          <textarea name="message" rows={4} placeholder="Your Message *" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandViolet" required />
          {status === 'loading' ? (
            <Button variant="primary" disabled>Sending…</Button>
          ) : status === 'success' ? (
            <div className="p-4 bg-green-100 text-green-800 rounded">🎉 Your request has been sent! We’ll reply soon.</div>
          ) : (
            <Button variant="primary" type="submit">
              Send Demo Request
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
