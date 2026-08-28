import { Menu, ArrowUpRight, X } from 'lucide-react'
import { useEffect, useState, useRef, useCallback } from 'react'
import { scrollToSection } from '../utils/scrollToSection'
import gsap from 'gsap'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [sectionProgress, setSectionProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeTimer = useRef(null)

  const titleRef = useRef(null)
  const progressRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const mobileTitleRef = useRef(null)

  const sectionIdentity = {
    home: 'Exploring Universe',
    about: 'About Me',
    projects: 'Built From Ideas',
    skills: 'My Arsenal',
    contact: "Let's Connect",
    footer: 'The End',
  }

  const mobileNavItems = [
    { label: 'HOME', id: '#home', num: '01' },
    { label: 'ABOUT', id: '#about', num: '02' },
    { label: 'PROJECTS', id: '#projects', num: '03' },
    { label: 'PROCESS', id: '#skills', num: '04' },
    { label: 'CONTACT', id: '#contact', num: '05' },
  ]

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = [
        'home',
        'about',
        'projects',
        'skills',
        'contact',
        'footer',
      ]

      let current = 'home'

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (
          section &&
          window.scrollY >= section.offsetTop - 200
        ) {
          current = id

          const start = section.offsetTop - 200
          const end = start + section.offsetHeight

          const progress =
            ((window.scrollY - start) / (end - start)) * 100

          setSectionProgress(
            Math.max(0, Math.min(100, progress))
          )
        }
      })

      setActive(current)
    }
    handleActiveSection()
    if (window.scrollY <= 10) {
      setSectionProgress(0)
    }
    window.addEventListener('scroll', handleActiveSection)

    return () => {
      window.removeEventListener('scroll', handleActiveSection)
    }
  }, [])

  useEffect(() => {
    if (!titleRef.current) return

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 15,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
      }
    )
  }, [active])

  useEffect(() => {
    if (!mobileTitleRef.current) return

    gsap.fromTo(
      mobileTitleRef.current,
      {
        opacity: 0,
        y: 8,
        filter: 'blur(5px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.5,
        ease: 'power2.out',
      }
    )
  }, [active])

  useEffect(() => {
    if (!progressRef.current) return

    gsap.to(progressRef.current, {
      width: `${sectionProgress}%`,
      duration: 0.12,
      ease: 'none',
    })
  }, [sectionProgress])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`
          mx-auto
          flex
          w-[min(1120px,calc(100%-1.5rem))]
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-slate-950/30
          backdrop-blur-2xl
          transform-gpu
          will-change-transform
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          shadow-2xl
          shadow-cyan-400/5
          ${scrolled
            ? 'mt-2 px-3 py-2 sm:px-5 sm:py-2.5 scale-[0.98]'
            : 'mt-3 px-4 py-2 sm:mt-4 sm:px-6 sm:py-3 scale-100'}
        `}
      >
        <button
          onClick={() => scrollToSection('#home')}
          className="
            group
            flex
            items-center
            gap-2 sm:gap-3
            cursor-pointer
            text-sm
            font-semibold
            uppercase
            tracking-[0.24em]
            text-white
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:translate-x-1
          "
        >
          <span
            className="
              flex
              h-10
              w-10
              sm:h-12
              sm:w-12
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              text-cyan-300
              transition-colors
              duration-700
              group-hover:border-cyan-300/60
              group-hover:bg-cyan-400/15
            "
          >
            <span className="relative left-[2px] text-xs sm:text-sm">
              BM
            </span>
          </span>
          <div className="hidden sm:flex flex-col leading-none">
            <span
              className="
                text-sm
                font-bold
                tracking-[0.25em]
                transition-colors
                duration-700
                group-hover:text-cyan-200
              "
            >
              BRIJESH
            </span>
            <span
              className="
                mt-1
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-cyan-300
                transition-[letter-spacing,color]
                duration-700
                group-hover:tracking-[0.34em]
              "
            >
              STORYCRAFT DESIGNER
            </span>
          </div>
        </button>

        <div
          className="
            pointer-events-none
            flex
            min-w-0
            flex-1
            items-center
            justify-center
            px-2
            md:hidden
          "
          aria-hidden="true"
        >
          <span
            ref={mobileTitleRef}
            key={`mobile-${active}`}
            className="
              max-w-full
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-cyan-300/90
            "
          >
            {sectionIdentity[active] || sectionIdentity.home}
          </span>
        </div>

        <nav className="hidden md:flex flex-col items-center gap-2">
          <div
            ref={titleRef}
            key={active}
            className="
              text-sm
              uppercase
              tracking-[0.35em]
              text-cyan-300
              drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
            "
          >
            {active === 'home' && 'Experience Ideas In Motion'}
            {active === 'about' && 'The Mind Behind The Build'}
            {active === 'projects' && 'Selected Work'}
            {active === 'skills' && 'Tools Of The Trade'}
            {active === 'contact' && 'Start A Conversation'}
            {active === 'footer' && 'The End'}
          </div>

          <div className="flex items-center gap-3">
            {[
              'home',
              'about',
              'projects',
              'skills',
              'contact',
              'footer',
            ].map((section) => (
              <span
                key={section}
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    active === section
                      ? 'bg-cyan-300 scale-140 shadow-[0_0_12px_rgba(34,211,238,0.8)]'
                      : 'bg-white/20'
                  }
                `}
              />
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <button
              onMouseEnter={() => {
                clearTimeout(closeTimer.current)
                setMenuOpen(true)
              }}
              onMouseLeave={() => {
                closeTimer.current = setTimeout(() => {
                  setMenuOpen(false)
                }, 150)
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/20
                bg-white/5
                text-cyan-300
                backdrop-blur-xl
                transition-all
                duration-500
                hover:bg-cyan-300
                hover:text-slate-950
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              "
            >
              ☰
            </button>

            <div
              onMouseEnter={() => {
                clearTimeout(closeTimer.current)
                setMenuOpen(true)
              }}
              onMouseLeave={() => {
                setMenuOpen(false)
              }}
              className={`
                absolute
                right-0
                top-[52px]
                w-64
                rounded-[1.8rem]
                border
                border-white/10
                bg-slate-950/90
                p-4
                backdrop-blur-2xl
                transition-all
                duration-500
                ${
                  menuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'pointer-events-none opacity-0 -translate-y-4'
                }
              `}
            >
              {[
                ['Home', '#home'],
                ['About Me', '#about'],
                ['Projects', '#projects'],
                ['Process', '#skills'],
                ['Contact', '#contact'],
              ].map(([label, id], index) => (
                <button
                  key={label}
                  onClick={() => scrollToSection(id)}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-slate-300
                    transition-all
                    duration-300
                    hover:bg-cyan-300/10
                    hover:text-cyan-300
                  "
                  style={{
                    transitionDelay: `${index * 40}ms`,
                  }}
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-white/20
                      transition-all
                      duration-300
                      group-hover:scale-150
                      group-hover:bg-cyan-300
                    "
                  />
                  <span className="tracking-[0.15em] uppercase text-xs">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
            className="
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-slate-100
              md:hidden
              transition-all
              duration-300
              active:scale-90
            "
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE FULL-SCREEN MENU OVERLAY ===== */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="
            mobile-menu-overlay
            md:hidden
          "
        >
          {/* Close button */}
          <button
            onClick={closeMobileMenu}
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-slate-300
              backdrop-blur-xl
              transition-all
              duration-300
              active:scale-90
              hover:border-cyan-300/30
              hover:text-cyan-300
            "
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          {/* Subtle glow accent */}
          <div
            className="
              absolute
              left-1/2
              top-1/3
              -translate-x-1/2
              -translate-y-1/2
              h-[300px]
              w-[300px]
              rounded-full
              bg-cyan-400/8
              blur-[100px]
              pointer-events-none
            "
          />

          {/* Nav items */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            {mobileNavItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  closeMobileMenu()
                }}
                className={`
                  mobile-menu-item
                  group
                  flex
                  items-center
                  gap-5
                  py-4
                  px-8
                  text-2xl
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  transition-colors
                  duration-300
                  ${
                    active === item.id.replace('#', '')
                      ? 'text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }
                `}
              >
                <span
  className={`
    w-5
    text-right
    text-[10px]
    font-normal
    tracking-[0.2em]
    transition-colors
    duration-300
    ${
      active === item.id.replace('#', '')
        ? 'text-cyan-300/60'
        : 'text-slate-600'
    }
  `}
>
  {item.num}
</span>

<span className="min-w-[150px]">
  {item.label}
</span>
                {active === item.id.replace('#', '') && (
                  <span className="ml-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </button>
            ))}
          </div>

          {/* Bottom tagline */}
          <p className="absolute bottom-10 left-0 right-0 text-center text-[10px] uppercase tracking-[0.3em] text-slate-600">
            Scroll to discover the story
          </p>
        </div>
      )}
    </header>
  )
}
