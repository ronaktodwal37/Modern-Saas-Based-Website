// src/components/DashboardPreview.jsx
import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <div className="relative bg-white rounded-xl shadow-card p-4 w-full max-w-md mx-auto">
      {/* Simplified mock: sidebar + main */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-12 bg-primaryBg rounded mr-4 flex flex-col items-center py-2">
          <div className="h-6 w-6 bg-brandViolet rounded-full mb-4" />
          <div className="h-4 w-4 bg-mutedSlate rounded-full mb-2" />
          <div className="h-4 w-4 bg-mutedSlate rounded-full" />
        </div>
        {/* Main area */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-heading text-lg text-deepNavy">Project Overview</h4>
            <span className="text-sm text-mutedSlate">12 Projects</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-primaryBg rounded p-2">
              <p className="font-medium">Completed</p>
              <p className="text-brandViolet">84%</p>
            </div>
            <div className="bg-primaryBg rounded p-2">
              <p className="font-medium">Active</p>
              <p className="text-brandViolet">5</p>
            </div>
          </div>
        </div>
      </div>
      {/* Floating notification */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -bottom-4 right-4 bg-accentCyan text-sm px-3 py-1 rounded-full shadow-md"
      >
        Task completed!
      </motion.div>
    </div>
  );
}
