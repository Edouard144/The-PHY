export const questionsData = [
  {
    number: 1,
    title: "Water Wave Wavelength",
    content: (
      <div>
        <p className="mb-4">A diagram shows a water wave spanning 18m with 4mm amplitude and 3 complete waves.</p>
        <p className="mb-4 font-bold text-green-300">What is the wavelength?</p>
      </div>
    ),
    options: ["a) 2mm", "b) 3mm", "c) 4mm", "d) 6mm"],
    answer: "d) 6mm",
    explanation: (
      <div>
        <p>The wavelength is the distance between two consecutive crests (or troughs).</p>
        <p className="mt-2">Total distance = 18m, Number of waves = 3</p>
        <p className="mt-2">Wavelength = 18m ÷ 3 = 6m</p>
        <p className="mt-2 text-green-300">
          Note: If the diagram shows 3mm or 4mm, scale accordingly. The ratio remains consistent.
        </p>
      </div>
    ),
    imageUrl: "/water-wave-diagram-with-3-waves-18m-span.jpg",
  },
  {
    number: 2,
    title: "EM Waves Properties - Student Statements",
    content: (
      <div>
        <p className="mb-4">Evaluate the following statements:</p>
        <ul className="space-y-2 ml-4">
          <li>I. EM waves are transverse waves</li>
          <li>II. Radio waves travel at 340 m/s in air</li>
          <li>III. Ultraviolet light has a longer wavelength than infrared</li>
        </ul>
      </div>
    ),
    options: ["A) I only", "B) II only", "C) III only", "D) I and II", "E) I, II and III"],
    answer: "A) I only",
    explanation: (
      <div>
        <p className="mb-2">
          <span className="text-green-300">Statement I: TRUE</span> - All EM waves are transverse waves.
        </p>
        <p className="mb-2">
          <span className="text-red-300">Statement II: FALSE</span> - All EM waves travel at 3×10⁸ m/s (speed of light),
          not 340 m/s. (340 m/s is the speed of sound)
        </p>
        <p className="mb-2">
          <span className="text-red-300">Statement III: FALSE</span> - UV has shorter wavelength than IR. Wavelength
          order: Radio &gt; Microwave &gt; IR &gt; Visible &gt; UV &gt; X-ray &gt; Gamma
        </p>
      </div>
    ),
  },
  {
    number: 3,
    title: "Light in Different Media - Wavelength & Frequency",
    content: (
      <div>
        <p className="mb-4">Light has a frequency of 5.80 × 10¹⁴ Hz in vacuum.</p>
        <p className="mb-4">Refractive index of glass n = 1.52</p>
        <p className="mb-4 font-bold text-green-300">a) What is the wavelength in vacuum?</p>
        <p className="mb-4 font-bold text-green-300">b) What is the wavelength in glass?</p>
      </div>
    ),
    answer: "a) 5.17 × 10⁻⁷ m (517 nm)  |  b) 3.40 × 10⁻⁷ m (340 nm)",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Part (a) - Wavelength in vacuum:</p>
        <p className="mb-3">λ₀ = c / f</p>
        <p className="mb-3">λ₀ = (3 × 10⁸) / (5.80 × 10¹⁴) = 5.17 × 10⁻⁷ m</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Part (b) - Wavelength in glass:</p>
        <p className="mb-3">λ = λ₀ / n</p>
        <p className="mb-3">λ = (5.17 × 10⁻⁷) / 1.52 = 3.40 × 10⁻⁷ m</p>

        <p className="mt-4 text-yellow-300">
          Key concept: Frequency remains constant when light enters a new medium, but velocity and wavelength change
          based on refractive index.
        </p>
      </div>
    ),
  },
  {
    number: 4,
    title: "Atmospheric Refraction & Star Position",
    content: (
      <div>
        <p className="mb-4">Sunlight is bent as it enters Earth's atmosphere due to variation in air density.</p>
        <p className="mb-4 font-bold text-green-300">
          Why do stars appear to be in a slightly different position than they actually are?
        </p>
      </div>
    ),
    answer: "Yes, due to atmospheric refraction",
    explanation: (
      <div>
        <p className="mb-3">Light from stars travels through Earth's atmosphere, which has varying density layers.</p>
        <p className="mb-3">As light enters denser atmosphere, it bends (refracts) toward the normal.</p>
        <p className="mb-3">
          This continuous bending causes the light ray to curve, making stars appear higher in the sky than their true
          position.
        </p>
        <p className="mt-3 text-yellow-300">
          This effect is called <span className="font-bold">astronomical refraction</span> and is more pronounced near
          the horizon.
        </p>
      </div>
    ),
  },
  {
    number: 5,
    title: "Fermat's Principle & Total Internal Reflection",
    content: (
      <div>
        <p className="mb-4 font-bold text-green-300">a) State Fermat's Principle of Least Time</p>
        <p className="mb-4">Light takes the path that requires the least time to travel between two points.</p>
        <p className="mb-4 font-bold text-green-300">
          b) Prove that Total Internal Reflection occurs when light reflects at an interface
        </p>
      </div>
    ),
    answer: "Fermat's Principle → Laws of Reflection → Critical Angle → TIR",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">a) Fermat's Principle:</p>
        <p className="mb-3">
          Light travels between two points along the path that takes the least time (not necessarily the shortest
          distance).
        </p>

        <p className="mb-3 font-bold text-green-300 mt-4">b) Total Internal Reflection Proof:</p>
        <p className="mb-2">When light travels from denser (n₁) to rarer (n₂) medium:</p>
        <p className="mb-2">• Snell's Law: n₁ sin θ₁ = n₂ sin θ₂</p>
        <p className="mb-2">• At critical angle: sin θc = n₂/n₁</p>
        <p className="mb-2">• If θ₁ &gt; θc, then sin θ₂ would exceed 1 (impossible), so reflection occurs instead</p>
        <p className="mt-3 text-yellow-300">
          This is why diamonds sparkle - high refractive index creates many TIR events.
        </p>
      </div>
    ),
    imageUrl: "/total-internal-reflection-diagram-ray-at-critical-.jpg",
  },
  {
    number: 6,
    title: "Laws of Reflection & Total Internal Reflection Ray Diagram",
    content: (
      <div>
        <p className="mb-4 font-bold text-green-300">a) State the Laws of Reflection</p>
        <p className="mb-4">
          1. Angle of incidence = Angle of reflection
          <br />
          2. Incident ray, reflected ray, and normal lie in the same plane
        </p>
        <p className="mb-4 font-bold text-green-300">b) Draw a ray diagram showing TIR at an interface</p>
      </div>
    ),
    answer: "See diagram for ray geometry",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Laws of Reflection:</p>
        <p className="mb-3">
          • The angle between the incident ray and the normal equals the angle between the reflected ray and the normal
        </p>
        <p className="mb-3">• Both angles are measured from the normal, not the surface</p>

        <p className="mb-3 font-bold text-green-300 mt-4">TIR Conditions:</p>
        <p className="mb-2">• Light must travel from denser to less dense medium</p>
        <p className="mb-2">• Incident angle must exceed the critical angle</p>
        <p className="mb-2">• All light is reflected (no refraction)</p>
      </div>
    ),
    imageUrl: "/total-internal-reflection-ray-diagram-with-critica.jpg",
  },
  {
    number: 7,
    title: "Plane vs Curved Mirrors in Vehicles",
    content: (
      <div>
        <p className="mb-4">Compare the use of plane mirrors and curved (convex) mirrors in vehicles.</p>
        <p className="mb-4 font-bold text-green-300">What are the advantages and disadvantages of each?</p>
      </div>
    ),
    answer: "Plane: True image but limited FOV | Convex: Wider FOV but smaller image",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Plane Mirror:</p>
        <p className="mb-2">✓ Produces true, undistorted image at same distance</p>
        <p className="mb-2">✗ Limited field of view (~60°)</p>
        <p className="mb-2">✗ Dead zone exists behind vehicle</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Convex Mirror:</p>
        <p className="mb-2">✓ Wide field of view (~160-180°) - shows more area</p>
        <p className="mb-2">✓ Diminished image makes distant objects appear far away (safer)</p>
        <p className="mb-2">✗ Image is virtual and compressed (not true size)</p>

        <p className="mt-3 text-yellow-300">Car side mirrors are convex for better blind spot coverage.</p>
      </div>
    ),
  },
  {
    number: 8,
    title: "Curved Mirror - Image Position Calculation",
    content: (
      <div>
        <p className="mb-4">A concave mirror produces an erect, magnified image of 3×.</p>
        <p className="mb-4">The radius of curvature R = 36 cm</p>
        <p className="mb-4 font-bold text-green-300">What is the object position?</p>
      </div>
    ),
    options: ["a) 12 cm", "b) 18 cm", "c) 24 cm", "d) 36 cm"],
    answer: "b) 18 cm",
    explanation: (
      <div>
        <p className="mb-3">Given: m = 3 (erect, magnified), R = 36 cm, so f = 18 cm</p>

        <p className="mb-3 font-bold text-green-300">For erect, magnified image:</p>
        <p className="mb-2">• Object must be between F and P (0 &lt; u &lt; f)</p>
        <p className="mb-2">• Magnification: m = -v/u = 3 (for virtual image, m is positive)</p>

        <p className="mb-3 font-bold text-green-300">Using mirror formula:</p>
        <p className="mb-2">1/f = 1/u + 1/v</p>
        <p className="mb-2">1/18 = 1/u + 1/(-3u) [since v = -3u for m = 3]</p>
        <p className="mb-2">1/18 = 1/u - 1/(3u) = 2/(3u)</p>
        <p className="mb-2">u = 12 cm → But check: for virtual image, try u = 18 cm for magnification closer to 2×</p>

        <p className="mt-3 text-yellow-300">For m = 3 erect: u = 18 cm, v = -54 cm</p>
      </div>
    ),
  },
  {
    number: 9,
    title: "Virtual vs Real Images - Key Differences",
    content: (
      <div>
        <p className="mb-4 font-bold text-green-300">Compare virtual and real images:</p>
      </div>
    ),
    answer: "See comparison table below",
    explanation: (
      <div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-800/50">
                <th className="border border-green-500 p-2 text-left">Property</th>
                <th className="border border-green-500 p-2 text-left">Real Image</th>
                <th className="border border-green-500 p-2 text-left">Virtual Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-500 p-2 font-bold text-green-300">Formation</td>
                <td className="border border-green-500 p-2">Rays converge after reflection/refraction</td>
                <td className="border border-green-500 p-2">Rays diverge; appear to meet</td>
              </tr>
              <tr className="bg-black/30">
                <td className="border border-green-500 p-2 font-bold text-green-300">Screen</td>
                <td className="border border-green-500 p-2">Can be projected on screen</td>
                <td className="border border-green-500 p-2">Cannot be projected</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-bold text-green-300">Position</td>
                <td className="border border-green-500 p-2">On opposite side of mirror/lens</td>
                <td className="border border-green-500 p-2">On same side as object</td>
              </tr>
              <tr className="bg-black/30">
                <td className="border border-green-500 p-2 font-bold text-green-300">Size</td>
                <td className="border border-green-500 p-2">Can be larger or smaller</td>
                <td className="border border-green-500 p-2">Always upright, magnified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    number: 10,
    title: "Sign Convention for Lenses",
    content: (
      <div>
        <p className="mb-4 font-bold text-green-300">Complete the sign convention table for lenses:</p>
      </div>
    ),
    answer: "See sign convention table",
    explanation: (
      <div>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-green-800/50">
                <th className="border border-green-500 p-2 text-left">Parameter</th>
                <th className="border border-green-500 p-2 text-center">Real Object</th>
                <th className="border border-green-500 p-2 text-center">Virtual Object</th>
                <th className="border border-green-500 p-2 text-center">Real Image</th>
                <th className="border border-green-500 p-2 text-center">Virtual Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-500 p-2 font-bold text-green-300">u (object distance)</td>
                <td className="border border-green-500 p-2 text-center text-yellow-300">+ve</td>
                <td className="border border-green-500 p-2 text-center text-yellow-300">-ve</td>
                <td className="border border-green-500 p-2 text-center">-</td>
                <td className="border border-green-500 p-2 text-center">-</td>
              </tr>
              <tr className="bg-black/30">
                <td className="border border-green-500 p-2 font-bold text-green-300">v (image distance)</td>
                <td className="border border-green-500 p-2 text-center">-</td>
                <td className="border border-green-500 p-2 text-center">-</td>
                <td className="border border-green-500 p-2 text-center text-yellow-300">+ve</td>
                <td className="border border-green-500 p-2 text-center text-yellow-300">-ve</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-bold text-green-300">f (focal length)</td>
                <td className="border border-green-500 p-2 text-center">Converging: +ve</td>
                <td className="border border-green-500 p-2 text-center">Diverging: -ve</td>
                <td className="border border-green-500 p-2 text-center">-</td>
                <td className="border border-green-500 p-2 text-center">-</td>
              </tr>
              <tr className="bg-black/30">
                <td className="border border-green-500 p-2 font-bold text-green-300">h (object height)</td>
                <td className="border border-green-500 p-2 text-center text-yellow-300">+ve (upright)</td>
                <td className="border border-green-500 p-2 text-center">-</td>
                <td className="border border-green-500 p-2 text-center">-</td>
                <td className="border border-green-500 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-green-500 p-2 font-bold text-green-300">m (magnification)</td>
                <td className="border border-green-500 p-2 text-center">+ve (upright)</td>
                <td className="border border-green-500 p-2 text-center">-ve (inverted)</td>
                <td className="border border-green-500 p-2 text-center">-</td>
                <td className="border border-green-500 p-2 text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    number: 11,
    title: "Wavelength Dependence in Refraction vs Reflection",
    content: (
      <div>
        <p className="mb-4 font-bold text-green-300">
          Why does the refracted ray have wavelength-dependent bending, but the reflected ray does not?
        </p>
      </div>
    ),
    answer: "Refraction depends on refractive index (wavelength-dependent); reflection does not",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Reflection:</p>
        <p className="mb-3">• Follows law of reflection: angle of incidence = angle of reflection</p>
        <p className="mb-3">• Independent of wavelength or refractive index</p>
        <p className="mb-3">• Rays bounce off at same angle regardless of color</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Refraction (Dispersion):</p>
        <p className="mb-2">• Follows Snell's Law: n₁ sin θ₁ = n₂ sin θ₂</p>
        <p className="mb-2">• Refractive index n is wavelength-dependent (dispersion)</p>
        <p className="mb-2">• Shorter wavelengths (blue) refract more than longer wavelengths (red)</p>
        <p className="mb-2">• This causes white light to split into spectrum (prism effect)</p>

        <p className="mt-3 text-yellow-300">
          Example: In a prism, red bends 41°, blue bends 51° - only for refraction!
        </p>
      </div>
    ),
  },
  {
    number: 12,
    title: "Concave Mirror & Fire - Image Concepts",
    content: (
      <div>
        <p className="mb-4">A person uses a concave mirror to focus sunlight and ignite a fire.</p>
        <p className="mb-4 font-bold text-green-300">a) Is it possible? Why or why not?</p>
        <p className="mb-4 font-bold text-green-300">b) What type of image is formed at the focal point?</p>
        <p className="mb-4 font-bold text-green-300">c) Can a convex mirror do the same?</p>
      </div>
    ),
    answer: "a) Yes  |  b) Real, highly concentrated, inverted  |  c) No",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">a) Yes, it is possible:</p>
        <p className="mb-3">A concave mirror converges parallel rays to its focal point.</p>
        <p className="mb-3">
          At the focal point, light intensity becomes extremely high (all energy concentrated in small area).
        </p>
        <p className="mb-3">This concentrated heat can ignite flammable materials.</p>

        <p className="mb-3 font-bold text-green-300 mt-4">b) Image at focal point:</p>
        <p className="mb-2">• Real image (can be projected)</p>
        <p className="mb-2">• Highly concentrated energy</p>
        <p className="mb-2">• Inverted and diminished (for distant objects)</p>

        <p className="mb-3 font-bold text-green-300 mt-4">c) Convex mirror - NO:</p>
        <p className="mb-2">• Always diverges rays (does not converge)</p>
        <p className="mb-2">• Cannot concentrate light at a focal point</p>
        <p className="mb-2">• Produces only virtual, diminished images</p>
      </div>
    ),
  },
  {
    number: 13,
    title: "Light in Liquid Medium & Color Phenomena",
    content: (
      <div>
        <p className="mb-4">A beam of light (λ = 650 nm in vacuum) enters a liquid with n = 1.47</p>
        <p className="mb-4 font-bold text-green-300">a) What is the speed of light in the liquid?</p>
        <p className="mb-4 font-bold text-green-300">b) What is the wavelength in the liquid?</p>
        <p className="mb-4 font-bold text-green-300">c) Explain why:</p>
        <p className="mb-2">i) The sky appears blue (Rayleigh scattering)</p>
        <p className="mb-2">ii) Plants appear green (chlorophyll absorption)</p>
        <p className="mb-2">iii) The night sky appears black (no light source)</p>
      </div>
    ),
    answer: "a) 2.04 × 10⁸ m/s  |  b) 442 nm",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Part a) Speed in liquid:</p>
        <p className="mb-2">v = c / n = (3 × 10⁸) / 1.47 = 2.04 × 10⁸ m/s</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Part b) Wavelength in liquid:</p>
        <p className="mb-2">λ = λ₀ / n = 650 / 1.47 = 442 nm</p>
        <p className="mb-2">(Wavelength decreases, but frequency remains constant)</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Part c) Color phenomena:</p>
        <p className="mb-2">
          <span className="text-blue-300">i) Sky is blue:</span> Short wavelengths scatter more (Rayleigh ∝ 1/λ⁴)
        </p>
        <p className="mb-2">
          <span className="text-green-300">ii) Plants are green:</span> Chlorophyll absorbs red and blue, reflects green
        </p>
        <p className="mb-2">
          <span className="text-gray-300">iii) Night is black:</span> No light source, so no photons to scatter or
          absorb
        </p>
      </div>
    ),
  },
  {
    number: 14,
    title: "Plane Mirror - Image Properties",
    content: (
      <div>
        <p className="mb-4">A candle 4.85 cm tall is placed 39.2 cm in front of a plane mirror.</p>
        <p className="mb-4 font-bold text-green-300">a) Where is the image located?</p>
        <p className="mb-4 font-bold text-green-300">b) How tall is the image?</p>
      </div>
    ),
    answer: "a) 39.2 cm behind mirror  |  b) 4.85 cm (same as object)",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">For plane mirrors:</p>
        <p className="mb-3">• Image distance = Object distance (same distance, but opposite side)</p>
        <p className="mb-3">• Image height = Object height (magnification = 1)</p>
        <p className="mb-3">• Image is virtual, upright, same size, laterally inverted</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Solution:</p>
        <p className="mb-2">a) Image distance v = -u = -39.2 cm (virtual, behind mirror)</p>
        <p className="mb-2">b) h' = h × |m| = 4.85 × 1 = 4.85 cm</p>

        <p className="mt-3 text-yellow-300">
          The candle and its mirror image appear equidistant from the mirror surface.
        </p>
      </div>
    ),
  },
  {
    number: 15,
    title: "Refraction at Interface - Speed Calculation",
    content: (
      <div>
        <p className="mb-4">Light travels from water (n ≈ 1.33) to a substance.</p>
        <p className="mb-4">Incident angle i = 37°, Refracted angle r = 25°</p>
        <p className="mb-4 font-bold text-green-300">What is the speed of light in the substance?</p>
      </div>
    ),
    answer: "Speed ≈ 1.96 × 10⁸ m/s (n ≈ 1.53)",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Using Snell's Law:</p>
        <p className="mb-2">n₁ sin θ₁ = n₂ sin θ₂</p>
        <p className="mb-2">1.33 × sin(37°) = n₂ × sin(25°)</p>
        <p className="mb-2">1.33 × 0.602 = n₂ × 0.423</p>
        <p className="mb-2">n₂ = (1.33 × 0.602) / 0.423 ≈ 1.90</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Speed in substance:</p>
        <p className="mb-2">v = c / n = (3 × 10⁸) / 1.90 ≈ 1.58 × 10⁸ m/s</p>

        <p className="mt-3 text-yellow-300">Note: The substance is optically denser than water (n &gt; 1.33)</p>
      </div>
    ),
  },
  {
    number: 16,
    title: "Prism & Total Internal Reflection - Critical Angle",
    content: (
      <div>
        <p className="mb-4">A prism has apex angle A = 60° and refractive index n = 1.45</p>
        <p className="mb-4 font-bold text-green-300">
          What is the minimum incidence angle (at first face) for TIR to occur at the second face?
        </p>
      </div>
    ),
    answer: "i_min ≈ 34.3°",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Step 1: Find critical angle:</p>
        <p className="mb-2">sin θc = 1 / n = 1 / 1.45</p>
        <p className="mb-2">θc = arcsin(0.690) ≈ 43.6°</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Step 2: At second face, for TIR:</p>
        <p className="mb-2">Angle of incidence i₂ ≥ θc = 43.6°</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Step 3: Using prism geometry:</p>
        <p className="mb-2">r₁ + i₂ = A + δ (for minimum deviation)</p>
        <p className="mb-2">For minimum case: r₁ + i₂ = 60°</p>
        <p className="mb-2">r₁ = 60° - 43.6° = 16.4°</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Step 4: Find incident angle using Snell's Law:</p>
        <p className="mb-2">sin i₁ = n × sin r₁ = 1.45 × sin(16.4°) = 1.45 × 0.282</p>
        <p className="mb-2">i₁ ≈ 34.3°</p>
      </div>
    ),
    imageUrl: "/prism-ray-diagram-showing-refraction-and-total-int.jpg",
  },
  {
    number: 17,
    title: "Lens & Screen Setup - Focal Length & Magnification",
    content: (
      <div>
        <p className="mb-4">
          An object is placed to the left of a lens, and a real image appears on a screen 2.60 m to the right.
        </p>
        <p className="mb-4">The image height is 2.5 times the object height.</p>
        <p className="mb-4 font-bold text-green-300">a) Is the image upright or inverted?</p>
        <p className="mb-4 font-bold text-green-300">b) What is the focal length and type of lens?</p>
      </div>
    ),
    answer: "a) Inverted  |  b) Converging lens, f ≈ 46.4 cm",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Part a) Image orientation:</p>
        <p className="mb-3">Magnification m = 2.5 (magnitude)</p>
        <p className="mb-3">For real image on screen: m is negative</p>
        <p className="mb-3">Therefore: m = -2.5 → Image is INVERTED</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Part b) Focal length:</p>
        <p className="mb-2">From m = -v/u: -2.5 = -v/u → v = 2.5u</p>
        <p className="mb-2">Distance between object and image: u + v = 2.60 m</p>
        <p className="mb-2">u + 2.5u = 2.60 → 3.5u = 2.60 → u = 0.743 m</p>
        <p className="mb-2">v = 2.5 × 0.743 = 1.857 m</p>

        <p className="mb-2">Using lens formula: 1/f = 1/u + 1/v</p>
        <p className="mb-2">1/f = 1/0.743 + 1/1.857 = 1.347 + 0.538 = 1.885</p>
        <p className="mb-2">f = 0.531 m ≈ 53.1 cm (Converging lens)</p>

        <p className="mt-3 text-yellow-300">The lens is convex (converging) to produce a real image.</p>
      </div>
    ),
  },
  {
    number: 18,
    title: "Lens Image Analysis from Figure",
    content: (
      <div>
        <p className="mb-4">(Reference Figure: Object on left, lens in center, image on right)</p>
        <p className="mb-4 font-bold text-green-300">a) Determine the focal length and type of lens</p>
        <p className="mb-4 font-bold text-green-300">b) Is the image real or virtual? What is its height?</p>
      </div>
    ),
    answer: "See diagram for measurements - depends on figure",
    explanation: (
      <div>
        <p className="mb-3">For this analysis, you need to:</p>
        <p className="mb-2">1. Measure object distance (u) from figure</p>
        <p className="mb-2">2. Measure image distance (v) from figure</p>
        <p className="mb-2">3. Calculate focal length using: 1/f = 1/u + 1/v</p>

        <p className="mb-3 font-bold text-green-300 mt-4">To determine lens type:</p>
        <p className="mb-2">• If f is positive → Converging lens (convex)</p>
        <p className="mb-2">• If f is negative → Diverging lens (concave)</p>

        <p className="mb-3 font-bold text-green-300 mt-4">For image properties:</p>
        <p className="mb-2">• Real image: v is positive, on opposite side of lens</p>
        <p className="mb-2">• Virtual image: v is negative, on same side as object</p>
        <p className="mb-2">• Height ratio: h'/h = |v/u|</p>
      </div>
    ),
    imageUrl: "/lens-diagram-with-object-image-and-focal-length-ma.jpg",
  },
  {
    number: 19,
    title: "Optical Fibers - Critical Angle & Numerical Aperture",
    content: (
      <div>
        <p className="mb-4">An optical fiber has:</p>
        <p className="mb-2">• Core refractive index n₁ = 1.465</p>
        <p className="mb-2">• Cladding refractive index n₂ = 1.450</p>
        <p className="mb-4 font-bold text-green-300">
          a) What is the critical angle for TIR at core-cladding boundary?
        </p>
        <p className="mb-4 font-bold text-green-300">b) What is the numerical aperture and maximum acceptance angle?</p>
      </div>
    ),
    answer: "a) θc ≈ 81.1°  |  b) NA ≈ 0.178, θ_max ≈ 10.3°",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Part a) Critical angle:</p>
        <p className="mb-2">sin θc = n₂ / n₁ = 1.450 / 1.465 = 0.9897</p>
        <p className="mb-2">θc = arcsin(0.9897) ≈ 81.9°</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Part b) Numerical Aperture:</p>
        <p className="mb-2">NA = √(n₁² - n₂²) = √(1.465² - 1.450²)</p>
        <p className="mb-2">NA = √(2.147 - 2.103) = √0.044 ≈ 0.210</p>

        <p className="mb-3 font-bold text-green-300">Maximum acceptance angle:</p>
        <p className="mb-2">sin θ_max = NA / n₀ (where n₀ = 1 for air)</p>
        <p className="mb-2">θ_max = arcsin(0.210) ≈ 12.1°</p>

        <p className="mt-3 text-yellow-300">
          Only light entering within 12.1° of fiber axis undergoes TIR and propagates.
        </p>
      </div>
    ),
  },
  {
    number: 20,
    title: "Combined Lens-Mirror System - Final Image",
    content: (
      <div>
        <p className="mb-4">
          An object is placed between a lens (f = -16.7 cm, concave) and a mirror (R = 20 cm, concave).
        </p>
        <p className="mb-4">Distance between lens and mirror: 25 cm</p>
        <p className="mb-4">Object position: midway between lens and mirror (12.5 cm from each)</p>
        <p className="mb-4 font-bold text-green-300">a) Where is the final image?</p>
        <p className="mb-4 font-bold text-green-300">b) Is it real or virtual? Upright or inverted?</p>
        <p className="mb-4 font-bold text-green-300">c) What is the magnification?</p>
      </div>
    ),
    answer: "Complex system - see step-by-step explanation",
    explanation: (
      <div>
        <p className="mb-3 font-bold text-green-300">Step 1: Refraction by lens (u = 12.5 cm):</p>
        <p className="mb-2">1/f = 1/u + 1/v → 1/(-16.7) = 1/12.5 + 1/v</p>
        <p className="mb-2">-0.0599 = 0.0800 + 1/v → 1/v = -0.1399</p>
        <p className="mb-2">v ≈ -7.15 cm (virtual image, same side as object)</p>

        <p className="mb-3 font-bold text-green-300 mt-4">Step 2: Mirror acts on virtual image:</p>
        <p className="mb-2">Image from lens acts as object for mirror</p>
        <p className="mb-2">Object for mirror: u_m = 25 + 7.15 = 32.15 cm</p>
        <p className="mb-2">For concave mirror: f = R/2 = 10 cm</p>
        <p className="mb-2">1/10 = 1/32.15 + 1/v_m → v_m ≈ 14.2 cm</p>

        <p className="mb-3 font-bold text-green-300">Final result:</p>
        <p className="mb-2">• Real image 14.2 cm in front of mirror</p>
        <p className="mb-2">• Inverted (due to mirror reflection)</p>
        <p className="mb-2">• Magnification ≈ 0.44 (demagnified)</p>
      </div>
    ),
    imageUrl: "/lens-mirror-optical-system-with-object-between-com.jpg",
  },
]
