// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#FAF9FF",
        secondaryBg: "#EEEAFE",
        brandViolet: "#5B43ED",
        brandIndigo: "#7964FF",
        deepNavy: "#17152F",
        mutedSlate: "#77738F",
        accentPeach: "#FFE6DA",
        accentCyan: "#DDF8F0",
        accentMint: "#DFF8F0"
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      borderRadius: {
        lg: "1rem"
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.05)"
      }
    }
  },
  plugins: []
};
