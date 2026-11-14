// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <h3 className="font-heading text-gray-800 mb-2">FlowPilot</h3>
          <p>Built with care for better teamwork.</p>
        </div>
        <div>
          <h4 className="font-heading text-gray-800 mb-2">Product</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Features</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-gray-800 mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        © 2026 FlowPilot. All rights reserved.
      </div>
    </footer>
  );
}
