import { ArrowDownRight } from 'lucide-react'
import { scrollToSection } from '../utils/scrollToSection'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-visible px-4 pt-28 sm:pt-32 md:px-8 md:pt-40"
    >
      <div className="mx-auto grid min-h-[auto] w-full max-w-7xl items-start gap-8 sm:gap-12 lg:min-h-[190vh] lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT COLUMN */}
        <div>
          <div className="hero-copy relative max-w-4xl">
            <div
              className="
                story-progress-line
                absolute
                left-[-24px]
                top-0
                hidden
                w-[2px]
                bg-cyan-300
                origin-top
                scale-y-0
                sm:block
              "
            />

            <span className="hero-badge mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.32em] text-slate-300">
              Frontend Developer & UI/UX Designer
            </span>

            <div className="hero-story-stage desktop-story-stage">
              <span className="mobile-story-signal" aria-hidden="true" />
              <div className="mobile-story-item overflow-visible mb-4 sm:mb-6">
              <h1 className="mobile-story-phase mobile-signal-line hero-title-line hero-story-line story-line first-story-line opacity-100 font-display text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]">
                <span className="chapter-word transition-all duration-700">
                  Ideas
                </span>{' '}
                become <span className="mobile-highlight-word">experiences.</span>
              </h1>
              </div>

              <div className="mobile-story-item overflow-visible mb-4 sm:mb-6">
              <h1 className="mobile-story-phase mobile-signal-line hero-title-line hero-story-line story-line opacity-0 font-display text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]">
                <span className="chapter-word transition-all duration-700">
                  Experiences
                </span>{' '}
                become <span className="mobile-highlight-word">stories</span> worth{' '}
                <span className="mobile-highlight-word">exploring.</span>
              </h1>
              </div>

              <div className="mobile-story-item overflow-visible mb-4 sm:mb-6">
              <h1 className="mobile-story-phase mobile-signal-line hero-title-line hero-story-line story-line opacity-0 font-display text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]">
                <span className="chapter-word transition-all duration-700">
                  Stories
                </span>{' '}
                become <span className="mobile-highlight-word">memories</span> that{' '}
                <span className="mobile-story-punctuation">last -</span>
              </h1>
              </div>

              <div className="mobile-story-item overflow-visible mb-4 sm:mb-6">
              <h1 className="mobile-story-phase mobile-signal-line hero-title-line hero-story-line story-line opacity-0 font-display text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]">
                Built with{' '}
                <span className="chapter-word transition-all duration-700">
                  <span className="mobile-highlight-word">purpose.</span>
                </span>
              </h1>
              </div>
            </div>

            <div className="mobile-story-stage" aria-label="Ideas become experiences, experiences become stories, stories become memories, purpose becomes reality">
              <div className="mobile-story-beat">
                <h1 className="mobile-story-line font-display">
                  <span className="mobile-activation-word">Ideas.</span>
                  <span className="mobile-story-support">Become experiences.</span>
                </h1>
              </div>

              <div className="mobile-story-beat">
                <h1 className="mobile-story-line font-display">
                  <span className="mobile-activation-word">Experiences.</span>
                  <span className="mobile-story-support">Become stories.</span>
                </h1>
              </div>

              <div className="mobile-story-beat">
                <h1 className="mobile-story-line font-display">
                  <span className="mobile-activation-word">Stories.</span>
                  <span className="mobile-story-support">Become memories.</span>
                </h1>
              </div>

              <div className="mobile-story-beat">
                <h1 className="mobile-story-line font-display">
                  <span className="mobile-activation-word">Purpose.</span>
                  <span className="mobile-story-support">Becomes reality.</span>
                </h1>
              </div>
            </div>

            <p className="hero-tagline mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300 md:text-xl">
              Building story-driven interfaces where design, motion,
              and technology come together to transform ideas into
              experiences, experiences into stories, and stories into
              lasting digital impressions.
            </p>
          </div>

          <div className="hero-buttons mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              data-scroll-link
              onClick={() => scrollToSection('#projects')}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-cyan-300
                px-6
                py-3.5
                sm:py-3
                text-sm
                font-semibold
                text-slate-950
                transition
                duration-300
                hover:bg-cyan-500
                active:scale-[0.97]
              "
            >
              View Projects
              <ArrowDownRight size={18} />
            </button>

            <button
              data-scroll-link
              onClick={() => scrollToSection('#contact')}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                py-3.5
                sm:py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-white/10
                active:scale-[0.97]
              "
            >
              Let's Connect !
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-card-journey sticky top-24 self-start will-change-transform">
          <div className="hero-visual relative">
            {/* Cyan Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-[#00a0e9]/15 blur-3xl sm:blur-3xl" />

            {/* Main Glass Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.5rem]
                sm:rounded-[2rem]
                border
                border-[#00a0e9]/20
                bg-gradient-to-br
                from-[#003f7f]/20
                via-[#07111f]/85
                to-[#00a0e9]/10
                p-5
                sm:p-6
                shadow-[0_0_40px_rgba(0,160,233,0.12)]
                sm:shadow-[0_0_60px_rgba(0,160,233,0.18)]
              "
            >
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                {/* Current Focus */}
                <div
                  className="
                    rounded-[1.2rem]
                    sm:rounded-[1.5rem]
                    border
                    border-[#00a0e9]/15
                    bg-[#071c2f]/85
                    p-4
                    sm:p-5
                  "
                >
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-slate-400">
                    Current Vision
                  </p>
                  <p className="mt-3 sm:mt-4 text-lg sm:text-2xl font-semibold text-white">
                    Designing experiences that feel alive
                  </p>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
                    Every interface is crafted with motion, clarity,
                    and intention—turning ideas into immersive digital
                    journeys.
                  </p>
                </div>

                {/* Core Stack */}
                <div
                  className="
                    rounded-[1.2rem]
                    sm:rounded-[1.5rem]
                    border
                    border-[#29ffd5]/20
                    bg-[#00a0e9]/12
                    p-4
                    sm:p-5
                  "
                >
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-200">
                    What I Build
                  </p>
                  <p className="mt-3 sm:mt-4 text-lg sm:text-2xl font-semibold text-white">
                    Story-driven web experiences
                  </p>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
                    Combining modern frontend development with
                    thoughtful design systems to create interfaces
                    people remember.
                  </p>
                </div>
              </div>

              {/* Creative Identity */}
              <div
                className="
                  mt-3
                  sm:mt-4
                  rounded-[1.2rem]
                  sm:rounded-[1.5rem]
                  border
                  border-[#00a0e9]/15
                  bg-[#081625]/85
                  p-4
                  sm:p-5
                "
              >
                <div className="flex items-center justify-between gap-4 border-b border-cyan-400/10 pb-3 sm:pb-4">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">
                    Creative Identity
                  </p>
                  <p className="text-xs sm:text-sm text-cyan-300">
                    Frontend Technologist
                  </p>
                </div>

                <div className="mt-2 text-center grid grid-cols-3 gap-2 pt-3">
                  {[
                    'Storytelling',
                    'Motion Design',
                    'Creative Coding',
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-xl
                        sm:rounded-2xl
                        border
                        border-[#00a0e9]/15
                        bg-[#00a0e9]/[0.07]
                        px-2
                        sm:px-3
                        py-2.5
                        sm:py-3
                        text-[10px]
                        sm:text-sm
                        text-slate-200
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
