"use client"

import { useEffect } from "react"

export default function RainEffect() {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh);
        }
      }

      .rain-drop {
        position: fixed;
        width: 1px;
        height: 20px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(0, 255, 0, 0.3));
        opacity: 0.5;
        animation: fall linear infinite;
        pointer-events: none;
        z-index: 0;
      }
    `
    document.head.appendChild(style)

    return () => document.head.removeChild(style)
  }, [])

  return (
    <>
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="rain-drop"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: Math.random() * 10 + 10 + "s",
            animationDelay: Math.random() * 2 + "s",
            top: Math.random() * -100 + "vh",
          }}
        />
      ))}
    </>
  )
}
