"use client"

import { Cloud } from "lucide-react"
import { motion } from "framer-motion"

interface HeaderProps {
  rainActive: boolean
  onRainToggle: (active: boolean) => void
}

export default function Header({ rainActive, onRainToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-green-950/30 to-black border-b-2 border-green-500/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center flex-1"
        >
          <h1 className="font-orbitron text-5xl font-bold text-green-400 mb-1 glow-green">Silent Physics</h1>
          <p className="font-roboto text-lg text-white">(SP - CAT Corrections)</p>
        </motion.div>

        <motion.button
          onClick={() => onRainToggle(!rainActive)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-orbitron font-bold transition-all duration-300 ${
            rainActive
              ? "bg-green-400 text-black border-2 border-green-200 glow-green"
              : "bg-black/50 text-green-400 border-2 border-green-500 hover:border-green-300"
          }`}
        >
          <Cloud className="inline mr-2" size={20} />
          Rain {rainActive ? "ON" : "OFF"}
        </motion.button>
      </div>
    </header>
  )
}
