import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-4 py-20 sm:py-28 md:px-8 md:py-1"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Stories translated into digital experiences."
          description="A few projects that reflect my interest in cinematic presentation, interface quality, and immersive frontend storytelling."
        />

        <div className="projects-container relative mt-16 sm:mt-24">
          <div className="projects-track sticky top-0 flex h-[110vh] w-max items-center gap-42 pl-[2.5vw] pr-[25vw]">
            {projects.map((project, index) => (
              <article
                key={project.title}
                data-focus
                style={{ zIndex: 100 + index }}
                className="project-card group relative w-[78vw] min-w-[78vw] rounded-[3rem] border border-white/10 bg-[#070b18]/90 transition-all duration-500 hover:-translate-y-2"
              >
                {/* ATMOSPHERE */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 blur-3xl transition duration-1000 group-hover:opacity-70`}
                />

                {/* GRID */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.04]" />

                <div className="relative z-10 grid min-h-[auto] sm:min-h-[58vh] gap-6 sm:gap-10 p-5 sm:p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
                  {/* LEFT CONTENT */}
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-6 sm:mb-10 inline-flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/5 text-lg sm:text-2xl font-semibold text-cyan-300 backdrop-blur">
                        0{index + 1}
                      </div>

                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-slate-500">
                        {project.subtitle}
                      </p>

                      <h3 className="project-title mt-4 sm:mt-6 max-w-xl text-3xl sm:text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl transition-all duration-500">
                        {project.title}
                      </h3>

                      <p className="project-description mt-5 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-300 md:text-xl transition-all duration-500">
                        {project.description}
                      </p>
                    </div>

                    {/* BUILT WITH */}
                    <div className="project-stack mt-6 sm:mt-9 transition-all duration-500">
                      <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-slate-400">
                        Built With
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {project.stack.join(' / ')}
                      </p>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105 hover:bg-cyan-200 active:scale-[0.97]"
                      >
                        Launch Site
                        <ArrowUpRight size={16} />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06] active:scale-[0.97]"
                      >
                        Source Code
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  {/* RIGHT VISUAL */}
                  <div className="relative">
                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-400/10 blur-3xl transition duration-1000 group-hover:scale-110" />

                    {/* MAIN FRAME */}
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a1220] p-4 sm:p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
                      {/* WINDOW BAR */}
                      <div className="mb-3 sm:mb-4 flex items-center gap-2 border-b border-white/10 pb-3 sm:pb-4">
                        <span className="h-3 w-3 rounded-full bg-red-400/80" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                        <span className="h-3 w-3 rounded-full bg-green-400/80" />
                      </div>

                      {/* LIVE WEBSITE */}
                      <div className="project-preview-frame relative h-[200px] sm:h-[400px] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-black">
                        <iframe
                          src={project.live}
                          title={project.title}
                          loading="lazy"
                          className="h-full w-full border-0"
                          style={{ pointerEvents: 'none' }}
                        />
                        {/* OVERLAY */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/40 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
