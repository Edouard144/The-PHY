"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import { sidebarContent } from "@/lib/sidebar-content"

interface SidebarProps {
  questionNumber: number
}

export default function Sidebar({ questionNumber }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const content = sidebarContent[questionNumber] || sidebarContent[0]

  return (
    <motion.div
      initial={{ x: 400 }}
      animate={{ x: isOpen ? 0 : 400 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed right-0 top-1/4 w-80 h-3/4 bg-green-900/90 backdrop-blur-md rounded-l-2xl border-l-4 border-green-400 shadow-2xl p-6 z-40 overflow-y-auto"
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-green-400 hover:text-green-300 hover:scale-110 transition-transform"
      >
        <X size={24} />
      </button>

      <h3 className="font-orbitron text-xl font-bold text-green-400 mb-4 glow-green">More on the Concept</h3>

      <div className="font-roboto text-white text-sm leading-relaxed space-y-4">{content}</div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(false)}
        className="mt-6 w-full bg-green-400 text-black py-2 rounded-lg font-orbitron font-bold hover:bg-green-300 transition-colors"
      >
        Close
      </motion.button>
    </motion.div>
  )
}
