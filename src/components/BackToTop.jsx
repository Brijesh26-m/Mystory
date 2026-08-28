import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const completed = progress > 95

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 20)

      const scrollTop = window.scrollY

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percentage = (scrollTop / docHeight) * 100

      setProgress(percentage)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.lenis?.scrollTo(0, {
      duration: 3,
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        group
        fixed
        bottom-6
        right-6
        sm:bottom-8
        sm:right-8
        z-[999]
        h-12
        w-12
        sm:h-14
        sm:w-14
        rounded-full
        ${completed
          ? 'bg-white'
          : 'bg-[#050816]/80 hover:bg-cyan-300'}
        border-white/10 backdrop-blur-xl
        transition-all
        duration-500
        hover:scale-110
        hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
        active:scale-95
        ${visible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-0'}
      `}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="5"
          />

          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke={completed ? '#ffffff' : '#22d3ee'}
            strokeWidth="5"
            strokeDasharray="289"
            strokeDashoffset={289 - (289 * progress) / 100}
            strokeLinecap="round"
          />
        </svg>

        <span
          className={`
            transition-all
            duration-700
            ${completed
              ? 'text-black'
              : 'text-cyan-300 group-hover:text-[#050816]'}
          `}
        >
          <ChevronUp size={26} strokeWidth={3.5} />
        </span>
      </div>
    </button>
  )
}
