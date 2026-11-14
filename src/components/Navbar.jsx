// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4" role="navigation" aria-label="Main navigation">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-heading text-brandViolet">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10 4-20 3 10h4" />
          </svg>
          <span>FlowPilot</span>
        </Link>
        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative hover:text-brandViolet transition-colors ${isActive ? "text-brandViolet font-medium" : "text-gray-700"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-brandViolet rounded"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-brandViolet">Login</Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-brandViolet to-brandIndigo text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              Get Started
            </Link>
          </li>
        </ul>
        {/* Mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-2 p-4"
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-2 text-center ${isActive ? "text-brandViolet" : "text-gray-700"}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/contact" className="block py-2 text-center text-gray-700" onClick={() => setOpen(false)}>Login</Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 text-center bg-gradient-to-r from-brandViolet to-brandIndigo text-white rounded-full"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
