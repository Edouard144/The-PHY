"use client"

import type React from "react"

import { useState } from "react"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface QuestionProps {
  question: {
    number: number
    title: string
    content: React.ReactNode
    options?: string[]
    answer?: string
    explanation?: string
    imageUrl?: string
  }
  questionNumber: number
  likes: number
  onLike: () => void
}

export default function QuestionCard({ question, questionNumber, likes, onLike }: QuestionProps) {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      onLike()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="bg-black/20 backdrop-blur-md border-2 border-green-500 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Header with title */}
      <div className="mb-6">
        <h2 className="font-orbitron text-3xl font-bold text-green-400 pb-3 border-b-2 border-green-400 glow-green mb-4">
          Question {questionNumber}
        </h2>
        <h3 className="font-roboto text-xl text-white font-semibold">{question.title}</h3>
      </div>

      {/* Main content */}
      <div className="mb-6 font-roboto text-white text-lg leading-relaxed">{question.content}</div>

      {/* Image placeholder if provided */}
      {question.imageUrl && (
        <div className="mb-6 rounded-2xl overflow-hidden border border-green-500/30">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={question.imageUrl}
            alt={`Question ${questionNumber} diagram`}
            className="w-full max-h-96 object-cover hover:border-green-400 transition-all"
          />
        </div>
      )}

      {/* Options */}
      {question.options && (
        <div className="mb-6 space-y-3">
          {question.options.map((option, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 4 }}
              className="flex items-center p-3 rounded-lg bg-black/10 border-2 border-green-300/50 hover:border-green-400 hover:bg-black/20 cursor-pointer transition-all"
            >
              <div className="w-6 h-6 rounded-full border-2 border-green-400 mr-3 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <span className="text-white font-roboto">{option}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Answer Accordion */}
      {question.answer && (
        <Accordion type="single" collapsible className="mb-6">
          <AccordionItem value="answer" className="border-green-400/50">
            <AccordionTrigger className="text-green-400 hover:text-green-300 font-orbitron font-bold">
              Reveal Answer
            </AccordionTrigger>
            <AccordionContent className="bg-green-900/30 p-4 rounded-lg border border-green-500/30 mt-3">
              <div className="text-white font-roboto">
                <p className="font-bold text-green-400 mb-3">Answer: {question.answer}</p>
                {question.explanation && <div className="text-white/80 leading-relaxed">{question.explanation}</div>}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {/* Like button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLike}
        className="flex items-center gap-2 text-green-400 hover:text-green-300 font-orbitron font-bold transition-all"
      >
        <Heart size={24} fill={liked ? "currentColor" : "none"} className={liked ? "text-green-400" : ""} />
        <span>{likes > 0 ? `${likes} Likes` : "Like"}</span>
      </motion.button>
    </motion.div>
  )
}
