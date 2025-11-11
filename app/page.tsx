"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import QuestionCard from "@/components/question-card"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"
import RainEffect from "@/components/rain-effect"
import { questionsData } from "@/lib/questions-data"

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [rainActive, setRainActive] = useState(false)
  const [likes, setLikes] = useState<{ [key: number]: number }>({})
  const [sidebarVisible, setSidebarVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.id.replace("q", ""))
            setCurrentQuestion(index)
            if (index >= 3) {
              setSidebarVisible(true)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    questionsData.forEach((_, idx) => {
      const el = document.getElementById(`q${idx}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-black via-gray-950 to-black ${rainActive ? "rain-active" : ""}`}
    >
      {rainActive && <RainEffect />}

      <Header rainActive={rainActive} onRainToggle={setRainActive} />

      <main className="max-w-4xl mx-auto px-8 pt-32 pb-20">
        {questionsData.map((question, idx) => (
          <section key={idx} id={`q${idx}`} className="mb-8 scroll-mt-24">
            <QuestionCard
              question={question}
              questionNumber={idx + 1}
              likes={likes[idx] || 0}
              onLike={() => toggleLike(idx)}
            />
          </section>
        ))}

        {/* Quiz completion modal */}
        <section className="mt-16 text-center">
          <div className="bg-black/30 backdrop-blur-md border-2 border-green-400 rounded-3xl p-12 shadow-2xl">
            <h2 className="font-orbitron text-4xl text-green-400 mb-4 glow-green">Quiz Complete!</h2>
            <p className="font-roboto text-xl text-white mb-4">
              You've explored all 19 physics corrections. Keep practicing!
            </p>
            <div className="text-6xl animate-pulse">✨</div>
          </div>
        </section>
      </main>

      {sidebarVisible && <Sidebar questionNumber={currentQuestion} />}
      <Footer />
    </div>
  )
}
