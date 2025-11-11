export default function Footer() {
  return (
    <footer className="relative mt-20 bg-black border-t-2 border-green-500/30 py-6">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="font-roboto text-white/80">Explore Physics in Silence © 2025</p>
      </div>
      {/* Glowing wave animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse" />
    </footer>
  )
}
