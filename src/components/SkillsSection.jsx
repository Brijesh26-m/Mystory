import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-4 py-20 sm:py-24 md:px-8 md:py-1"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="How ideas become immersive experiences."
          description="Every project begins with a concept, evolves through motion, and comes to life through thoughtful development."
        />

        <div className="skills-journey relative mt-16 sm:mt-32 min-h-[auto] sm:min-h-[1700px]">
          {/* SVG JOURNEY */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1200 1700"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* PATH 1 */}
            <path
              id="path-1"
              d="M 700 160 C 1500 220, -500 850, 311 870"
              fill="none"
              stroke="#143147"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* PATH 2 */}
            <path
              id="path-2"
              d="M 985 920 C 1500 1000, 1300 1000, 690 1550"
              fill="none"
              stroke="#143147"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* ACTIVE PATH 1 */}
            <path
              id="path-1-active"
              style={{
                strokeDasharray: 9999,
                strokeDashoffset: 9999,
              }}
              d="M 700 160 C 1500 220, -500 850, 311 870"
              fill="none"
              stroke="#22d3ee"
              filter="url(#glow)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* ACTIVE PATH 2 */}
            <path
              id="path-2-active"
              style={{
                strokeDasharray: 9999,
                strokeDashoffset: 9999,
              }}
              d="M 985 920 C 1500 1000, 1300 1000, 690 1550"
              fill="none"
              stroke="#22d3ee"
              filter="url(#glow)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          {/* CARD 1 */}
          <div
            id="card-imagine"
            className="
              relative
              z-10
              w-full
              sm:w-[59%]
              rounded-[1.5rem]
              sm:rounded-[3rem]
              border
              border-white/10
              bg-[#070b18]/90
              p-6
              sm:p-12
              backdrop-blur-xl
            "
          >
            <div className="chapter-signal mb-4 sm:mb-0" aria-hidden="true">
              <span className="chapter-signal-base" />
              <span className="chapter-signal-wave" />
            </div>
            <p className="text-xs sm:text-sm tracking-[0.4em] text-cyan-300">
              CHAPTER 01
            </p>

            <h3 className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold text-white">
              Imagine
            </h3>

            <p className="mt-6 sm:mt-10 max-w-2xl text-base sm:text-xl leading-7 sm:leading-10 text-slate-400">
              Every experience begins with understanding the audience,
              defining user journeys, and shaping ideas into meaningful
              creative directions.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            id="card-animate"
            className="
              relative
              z-10
              w-full
              sm:ml-[25%]
              sm:mt-96
              sm:w-[58%]
              rounded-[1.5rem]
              sm:rounded-[3rem]
              border
              border-slate-700/30
              bg-[#070b18]/90
              p-6
              sm:p-12
              backdrop-blur-xl
            "
          >
            <div className="relative z-10">
              <div className="chapter-signal mb-4 sm:mb-0" aria-hidden="true">
                <span className="chapter-signal-base" />
                <span className="chapter-signal-wave" />
              </div>
              <p className="text-xs sm:text-sm tracking-[0.4em] text-cyan-300">
                CHAPTER 02
              </p>

              <h3 className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold text-white">
                Animate
              </h3>

              <p className="mt-6 sm:mt-10 max-w-2xl text-base sm:text-xl leading-7 sm:leading-10 text-slate-400">
                Motion is used to guide attention, create emotion,
                and transform static interfaces into immersive stories.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            id="card-build"
            className="
              relative
              z-10
              w-full
              sm:mt-96
              sm:w-[58%]
              rounded-[1.5rem]
              sm:rounded-[3rem]
              border
              border-slate-700/30
              bg-[#070b18]/90
              p-6
              sm:p-12
              backdrop-blur-xl
            "
          >
            <div className="relative z-10">
              <div className="chapter-signal mb-4 sm:mb-0" aria-hidden="true">
                <span className="chapter-signal-base" />
                <span className="chapter-signal-wave" />
              </div>
              <p className="text-xs sm:text-sm tracking-[0.4em] text-cyan-300">
                CHAPTER 03
              </p>

              <h3 className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold text-white">
                Build
              </h3>

              <p className="mt-6 sm:mt-10 max-w-2xl text-base sm:text-xl leading-7 sm:leading-10 text-slate-400">
                Design systems, frontend architecture, and polished
                user experiences come together here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
