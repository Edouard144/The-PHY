import type React from "react"
export const sidebarContent: { [key: number]: React.ReactNode } = {
  0: (
    <div>
      <p className="font-bold text-green-300 mb-2">Wavelength Basics</p>
      <p className="mb-3">The wavelength (λ) is the distance between two consecutive crests or troughs in a wave.</p>
      <p>For periodic waves: λ = v/f, where v is wave speed and f is frequency.</p>
    </div>
  ),
  1: (
    <div>
      <p className="font-bold text-green-300 mb-2">EM Wave Spectrum</p>
      <p className="mb-3">Radio → Microwave → IR → Visible → UV → X-ray → Gamma</p>
      <p className="mb-3">All travel at 3×10⁸ m/s in vacuum.</p>
      <p>UV has shorter wavelength than visible, visible shorter than IR.</p>
    </div>
  ),
  2: (
    <div>
      <p className="font-bold text-green-300 mb-2">Frequency Never Changes</p>
      <p className="mb-3">When light enters a new medium, frequency stays constant, but:</p>
      <p className="mb-2">• Velocity decreases: v = c/n</p>
      <p>• Wavelength decreases: λ = λ₀/n</p>
    </div>
  ),
  3: (
    <div>
      <p className="font-bold text-green-300 mb-2">Atmospheric Effects</p>
      <p className="mb-3">Earth's atmosphere varies in density with altitude.</p>
      <p className="mb-3">Light refracts continuously, bending toward denser regions.</p>
      <p>This is why stars appear higher than their true position and why we see mirages!</p>
    </div>
  ),
  4: (
    <div>
      <p className="font-bold text-green-300 mb-2">Fermat's Insight</p>
      <p className="mb-3">Light doesn't take the shortest path, it takes the FASTEST path.</p>
      <p className="mb-3">This simple principle explains reflection, refraction, and even modern optics!</p>
      <p>From this comes Snell's Law and the critical angle for TIR.</p>
    </div>
  ),
  5: (
    <div>
      <p className="font-bold text-green-300 mb-2">Mirror Laws</p>
      <p className="mb-3">Angle of incidence = Angle of reflection (measured from normal, not surface)</p>
      <p className="mb-3">The normal is perpendicular to the reflecting surface.</p>
      <p>This law is INDEPENDENT of wavelength - all colors reflect the same way!</p>
    </div>
  ),
  6: (
    <div>
      <p className="font-bold text-green-300 mb-2">Convex vs Concave</p>
      <p className="mb-3">Car mirrors are convex (diverging) to see wider area.</p>
      <p className="mb-3">Makeup mirrors are concave (converging) to magnify.</p>
      <p>Concave converges light to real focus point; convex always produces virtual image.</p>
    </div>
  ),
  7: (
    <div>
      <p className="font-bold text-green-300 mb-2">Mirror Formula</p>
      <p className="mb-3">1/f = 1/u + 1/v</p>
      <p className="mb-3">Magnification: m = -v/u (negative means inverted)</p>
      <p>Focal length: f = R/2 (R is radius of curvature)</p>
    </div>
  ),
  8: (
    <div>
      <p className="font-bold text-green-300 mb-2">Real vs Virtual</p>
      <p className="mb-3">Real image: Rays actually converge; can be projected on screen</p>
      <p className="mb-3">Virtual image: Rays appear to diverge; cannot be projected</p>
      <p>Plane mirror: Always virtual, upright, same size</p>
    </div>
  ),
  9: (
    <div>
      <p className="font-bold text-green-300 mb-2">Sign Conventions Matter!</p>
      <p className="mb-3">Different books use different sign conventions for mirrors vs lenses.</p>
      <p className="mb-3">Always follow YOUR textbook's convention consistently.</p>
      <p>Common: Real objects/images positive; virtual negative</p>
    </div>
  ),
  10: (
    <div>
      <p className="font-bold text-green-300 mb-2">Why Blue Sky?</p>
      <p className="mb-3">Rayleigh scattering: I ∝ 1/λ⁴</p>
      <p className="mb-3">Blue light (shorter λ) scatters 10× more than red.</p>
      <p>So sky appears blue during day; sunset is red!</p>
    </div>
  ),
  11: (
    <div>
      <p className="font-bold text-green-300 mb-2">Dispersion Magic</p>
      <p className="mb-3">White light in prism splits into rainbow.</p>
      <p className="mb-3">Red bends least, violet bends most.</p>
      <p>This is why diamonds sparkle different colors!</p>
    </div>
  ),
  12: (
    <div>
      <p className="font-bold text-green-300 mb-2">Focal Point Power</p>
      <p className="mb-3">All parallel rays converge at focal point of concave mirror.</p>
      <p className="mb-3">Intensity at focus = (Area of mirror)² / (Area of focus point)²</p>
      <p>This concentration creates extreme heat!</p>
    </div>
  ),
  13: (
    <div>
      <p className="font-bold text-green-300 mb-2">Speed vs Wavelength</p>
      <p className="mb-3">Speed in medium: v = c/n</p>
      <p className="mb-3">Wavelength in medium: λ = λ₀/n</p>
      <p>Frequency NEVER changes: f = f₀ always!</p>
    </div>
  ),
  14: (
    <div>
      <p className="font-bold text-green-300 mb-2">Mirror Symmetry</p>
      <p className="mb-3">Plane mirror creates perfect mirror image at same distance behind.</p>
      <p className="mb-3">If you stand 1m from mirror, your image appears 1m behind it.</p>
      <p>Always virtual, upright, and life-size!</p>
    </div>
  ),
  15: (
    <div>
      <p className="font-bold text-green-300 mb-2">Snell's Law Deep Dive</p>
      <p className="mb-3">n₁ sin θ₁ = n₂ sin θ₂</p>
      <p className="mb-3">Light bends TOWARD normal when entering denser medium.</p>
      <p>Light bends AWAY from normal when entering less dense medium.</p>
    </div>
  ),
  16: (
    <div>
      <p className="font-bold text-green-300 mb-2">Prism Power</p>
      <p className="mb-3">Prisms use refraction to bend and disperse light.</p>
      <p className="mb-3">At extreme angles, TIR occurs (no light exits).</p>
      <p>This is why prism binoculars are so effective!</p>
    </div>
  ),
  17: (
    <div>
      <p className="font-bold text-green-300 mb-2">Converging Lenses</p>
      <p className="mb-3">Convex lenses converge light to real focal point.</p>
      <p className="mb-3">Can form both real and virtual images depending on object position.</p>
      <p>Used in: cameras, magnifying glasses, telescopes!</p>
    </div>
  ),
  18: (
    <div>
      <p className="font-bold text-green-300 mb-2">Lens Formula Magic</p>
      <p className="mb-3">1/f = 1/u + 1/v</p>
      <p className="mb-3">Magnification: m = h'/h = -v/u</p>
      <p>Power of lens: P = 1/f (in diopters when f is in meters)</p>
    </div>
  ),
  19: (
    <div>
      <p className="font-bold text-green-300 mb-2">Fiber Optics Future</p>
      <p className="mb-3">TIR in thin glass fibers transmits data globally via light pulses!</p>
      <p className="mb-3">Minimal refractive index difference creates high numerical aperture.</p>
      <p>This is the foundation of modern internet infrastructure!</p>
    </div>
  ),
}
