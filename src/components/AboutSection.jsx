import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-4 py-16 sm:py-24 md:px-8 md:py-20"
    >
      {/* Floating Glow */}
      <div
        className="
          about-glow
          pointer-events-none
          absolute
          right-[10%]
          top-[20%]
          hidden
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-400/10
          blur-3xl
          sm:block
        "
      />

      {/* Mobile glow - lighter */}
      <div
        className="
          pointer-events-none
          absolute
          left-[50%]
          top-[10%]
          -translate-x-1/2
          block
          h-[180px]
          w-[180px]
          rounded-full
          bg-cyan-400/6
          blur-[80px]
          sm:hidden
        "
      />

      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <SectionHeading
            eyebrow="About Me"
            title="Crafting digital experiences that people remember."
            description="I transform ideas into responsive interfaces through thoughtful design, purposeful motion, and modern frontend development."
          />
        </div>

        {/* RIGHT */}
        <div className="space-y-5 sm:space-y-6">
          {/* Main About Card */}
          <div
            className="
              reveal
              group
              relative
              overflow-hidden
              rounded-[1.5rem]
              sm:rounded-[2rem]
              border
              border-white/10
              bg-white/[0.03]
              p-6
              sm:p-8
              shadow-2xl
              shadow-black/30
              transition
              duration-700
              hover:border-cyan-300/20
              md:p-10
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

            <div className="relative z-10">
              <p className="about-reading text-sm sm:text-base leading-7 sm:leading-8 text-slate-300 md:text-lg">
                I'm Brijesh Maurya, a frontend developer and UI/UX
                designer passionate about turning ideas into immersive
                digital experiences. I see websites as living narratives
                where every interaction, transition, and visual detail
                contributes to a larger story.
              </p>

              <p className="about-reading mt-6 sm:mt-8 text-sm sm:text-base leading-7 sm:leading-8 text-slate-400 md:text-lg">
                With tools like React, Tailwind CSS, GSAP, Figma, and
                JavaScript, I transform concepts into polished digital
                experiences where design, motion, and technology work
                together seamlessly.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="about-card-wrapper relative z-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {[
              {
                label: 'VISION',
                title: 'Story-Led Thinking',
              },
              {
                label: 'PROCESS',
                title: 'Purposeful Motion',
              },
              {
                label: 'GOAL',
                title: 'Memorable Experiences',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  reveal
                  group
                  relative
                  overflow-hidden
                  rounded-[1.4rem]
                  sm:rounded-[1.8rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  sm:p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-300/20
                  hover:bg-cyan-300/[0.04]
                "
              >
                {/* Shine Sweep */}
                <div
                  className="
                    absolute
                    top-0
                    left-[-150%]
                    h-full
                    w-[120%]
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300/10
                    to-transparent
                    pointer-events-none
                  "
                />

                <div className="relative z-10 text-center sm:text-left">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-cyan-300">
                    {item.label}
                  </p>
                  <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
