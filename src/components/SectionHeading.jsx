export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal mb-6 sm:mb-10 max-w-2xl">
      <span className="mb-3 sm:mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </span>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  )
}
