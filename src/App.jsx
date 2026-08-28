import { useEffect, useRef, useState, useMemo } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import LoaderScreen from './components/LoaderScreen'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

import { useLenis } from './hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useLenis()
  const [loading, setLoading] = useState(true)
  const cursorRef = useRef(null)
  const progressRef = useRef(null)

  const isMobile = useMemo(
    () => typeof window !== 'undefined' && window.innerWidth < 640,
    []
  )

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (loading) return
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduceMotion) {
      if (isMobile) {
        gsap.set('.mobile-activation-word', {
          color: '#67e8f9',
        })
      }
      return undefined
    }

    const ctx = gsap.context(() => {
      /*
       * =========================
       * HERO INTRO
       * =========================
       */

      gsap.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      )

      if (!isMobile) {
        gsap.from('.hero-title-line', {
          opacity: 0,
          y: 120,
          stagger: 0.12,
          duration: 1.4,
          ease: 'power4.out',
        })
      }

      gsap.from('.hero-tagline', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      })

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out',
      })

      gsap.from('.hero-visual', {
        opacity: 0,
        scale: 0.92,
        y: isMobile ? 30 : 60,
        duration: 1.4,
        ease: 'power4.out',
      })

      if (!isMobile) {
        gsap.utils.toArray('.chapter-word').forEach((word) => {
          gsap.fromTo(
            word,
            { color: '#ffffff' },
            {
              color: '#67e8f9',
              scrollTrigger: {
                trigger: word,
                start: 'top 80%',
                end: 'top 55%',
                scrub: true,
              },
            }
          )
        })
      }

      if (isMobile) {
        const activationWords = gsap.utils.toArray('.mobile-activation-word')
        gsap.timeline({ delay: 0.35 }).to(activationWords, {
          color: '#67e8f9',
          duration: 1,
          stagger: 1.1,
          ease: 'power2.out',
        })
      }

      /*
       * =========================
       * MEMORY TRAIL
       * =========================
       */

      if (!isMobile) {
        gsap.set('.story-line:not(.first-story-line)', {
          opacity: 0,
        })

        gsap.utils.toArray('.story-line').forEach((line) => {
          ScrollTrigger.create({
            trigger: line,
            start: 'top 70%',
            onEnter: () => {
              gsap.to(line, { opacity: 1, duration: 0.6 })
            },
            onLeaveBack: () => {
              if (!line.classList.contains('first-story-line')) {
                gsap.to(line, { opacity: 0, duration: 0.6 })
              }
            },
          })
        })
      }

      /*
       * =========================
       * CINEMATIC REVEALS
       * =========================
       */

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 95%',
          },
          opacity: 0,
          y: isMobile ? 24 : 40,
          filter: isMobile ? 'none' : 'blur(6px)',
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
        })
      })

      /*
       * =========================
       * READING HIGHLIGHT
       * =========================
       */

      gsap.utils.toArray('.about-reading').forEach((paragraph) => {
        ScrollTrigger.create({
          trigger: paragraph,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(paragraph, {
              color: '#e2e8f0',
              duration: 0.8,
              ease: 'power2.out',
            })
          },
          onLeaveBack: () => {
            gsap.to(paragraph, {
              color: '#94a3b8',
              duration: 0.8,
              ease: 'power2.out',
            })
          },
        })
      })

      /*
       * =========================
       * ABOUT FLOATING GLOW
       * =========================
       */

      gsap.to('.about-glow', {
        y: -35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      /*
       * =========================
       * SKILL JOURNEY (desktop only)
       * =========================
       */

      if (!isMobile) {
        setTimeout(() => {
          const path1 = document.getElementById('path-1-active')
          const path2 = document.getElementById('path-2-active')

          if (!path1 || !path2) return

          const len1 = path1.getTotalLength()
          const len2 = path2.getTotalLength()

          gsap.set(path1, {
            strokeDasharray: len1,
            strokeDashoffset: len1,
          })
          gsap.set(path2, {
            strokeDasharray: len2,
            strokeDashoffset: len2,
          })

          /* INITIAL LOCK STATE */
          gsap.set('#card-imagine', {
            opacity: 0.8,
            scale: 0.98,
            borderColor: 'rgba(255,255,255,0.15)',
          })
          gsap.set('#card-animate', {
            opacity: 0.35,
            scale: 0.96,
            borderColor: 'rgba(255,255,255,0.10)',
          })
          gsap.set('#card-build', {
            opacity: 0.35,
            scale: 0.96,
            borderColor: 'rgba(255,255,255,0.10)',
          })

          /* CARD 1 UNLOCK */
          gsap.to('#card-imagine', {
            opacity: 1,
            scale: 1,
            borderColor: '#ffffff',
            boxShadow: '0 0 40px rgba(34,211,238,0.25)',
            scrollTrigger: {
              trigger: '#card-imagine',
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          })

          /* PATH 1 */
          gsap.fromTo(
            path1,
            { strokeDashoffset: len1 },
            {
              strokeDashoffset: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: '#card-imagine',
                start: 'top 70%',
                end: 'bottom -10%',
                scrub: 1,
              },
            }
          )

          /* ANIMATE UNLOCK */
          ScrollTrigger.create({
            trigger: '#card-imagine',
            start: 'bottom -10%',
            onEnter: () => {
              gsap.to('#card-animate', {
                opacity: 1,
                scale: 1,
                borderColor: '#ffffff',
                boxShadow: '0 0 40px rgba(34,211,238,0.25)',
                duration: 0.4,
              })
            },
            onLeaveBack: () => {
              gsap.to('#card-animate', {
                opacity: 0.35,
                scale: 0.96,
                borderColor: 'rgba(255,255,255,0.10)',
                boxShadow: '0 0 0px rgba(34,211,238,0)',
                duration: 0.4,
              })
            },
          })

          /* PATH 2 */
          gsap.fromTo(
            path2,
            { strokeDashoffset: len2 },
            {
              strokeDashoffset: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: '#card-imagine',
                start: 'bottom -10%',
                end: '+=700',
                scrub: 1,
              },
            }
          )

          /* BUILD UNLOCK */
          ScrollTrigger.create({
            trigger: '#card-imagine',
            start: 'bottom -810px',
            onEnter: () => {
              gsap.to('#card-build', {
                opacity: 1,
                scale: 1,
                borderColor: '#ffffff',
                boxShadow: '0 0 40px rgba(34,211,238,0.25)',
                duration: 0.4,
              })
            },
            onLeaveBack: () => {
              gsap.to('#card-build', {
                opacity: 0.35,
                scale: 0.96,
                borderColor: 'rgba(255,255,255,0.10)',
                boxShadow: '0 0 0px rgba(34,211,238,0)',
                duration: 0.4,
              })
            },
          })
        }, 300)
      }

      /*
       * =========================
       * MOBILE STORY DOCKING
       * =========================
       */

      if (isMobile) {
        const storyCards = [
          document.getElementById('card-imagine'),
          document.getElementById('card-animate'),
          document.getElementById('card-build'),
        ].filter(Boolean)
        let activeChapter = -1

        storyCards.forEach((card, index) => {
          const signalWave = card.querySelector('.chapter-signal-wave')
          const title = card.querySelector('h3')
          const isFinalChapter = index === storyCards.length - 1

          gsap.set(card, {
            opacity: index === 0 ? 1 : 0.68,
            scale: index === 0 ? 1 : 0.97,
            y: index === 0 ? 0 : -3,
            borderColor: index === 0
              ? 'rgba(103,232,249,0.42)'
              : 'rgba(255,255,255,0.10)',
            boxShadow: index === 0
              ? '0 0 10px rgba(34,211,238,0.06)'
              : '0 0 0px rgba(34,211,238,0)',
          })
          gsap.set(signalWave, { x: -12, opacity: 0 })

          const energySweep = gsap.timeline({ paused: true })
            .to(signalWave, {
              x: 0,
              opacity: 1,
              duration: 0.12,
              ease: 'power2.out',
            })
            .to(signalWave, {
              x: isFinalChapter ? 34 : 32,
              duration: isFinalChapter ? 0.62 : 0.48,
              ease: 'power2.inOut',
            })
            .to(signalWave, {
              x: isFinalChapter ? 46 : 44,
              opacity: 0,
              duration: 0.12,
              ease: 'power2.in',
            })
            .to(card, {
              scale: 1.03,
              y: 0,
              duration: 0.2,
              ease: 'power2.out',
            })
            .to(card, {
              scale: 1,
              duration: 0.25,
              ease: 'power2.out',
            })
            .to(title, {
              color: '#67e8f9',
              duration: 0.16,
              ease: 'power2.out',
            }, '-=0.05')
            .to(card, {
              borderColor: isFinalChapter
                ? 'rgba(103,232,249,0.72)'
                : 'rgba(103,232,249,0.58)',
              boxShadow: isFinalChapter
                ? '0 0 18px rgba(34,211,238,0.14)'
                : '0 0 12px rgba(34,211,238,0.09)',
              duration: 0.16,
            }, '<')
            .to(title, {
              color: '#ffffff',
              duration: isFinalChapter ? 0.55 : 0.4,
              ease: 'power2.out',
            })
            .to(card, {
              borderColor: 'rgba(103,232,249,0.38)',
              boxShadow: '0 0 8px rgba(34,211,238,0.05)',
              duration: 0.55,
              ease: 'power2.out',
            }, '<')

          const activateChapter = () => {
            if (activeChapter === index) return
            activeChapter = index

            storyCards.forEach((storyCard, storyIndex) => {
              const isActive = storyIndex === index
              const isPrevious = storyIndex < index

              gsap.to(storyCard, {
                opacity: isActive ? 1 : isPrevious ? 0.65 : 0.78,
                scale: isActive ? 1 : 0.97,
                y: isPrevious ? -4 : 0,
                borderColor: isActive
                  ? 'rgba(103,232,249,0.42)'
                  : 'rgba(255,255,255,0.10)',
                boxShadow: isActive
                  ? '0 0 10px rgba(34,211,238,0.06)'
                  : '0 0 0px rgba(34,211,238,0)',
                duration: 0.35,
                ease: 'power2.out',
              })
            })

            energySweep.restart()
          }

          ScrollTrigger.create({
            trigger: card,
            start: 'top 68%',
            end: 'bottom 32%',
            onEnter: activateChapter,
            onEnterBack: activateChapter,
          })
        })
      }

      /*
       * =========================
       * CONTACT SIGNAL
       * =========================
       */

      gsap.set('.contact-form', {
        opacity: 0,
        y: isMobile ? 30 : 50,
      })
      gsap.set('.contact-field', { opacity: 0, y: 20 })
      gsap.set('.contact-submit', { opacity: 0, y: 20 })

      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 70%',
        },
      })

      contactTl
        .to('.contact-form', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        })
        .to('.contact-field', {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.5,
          ease: 'power3.out',
        })
        .to('.contact-submit', {
          opacity: 1,
          y: 0,
          duration: 0.4,
        })
        .to('.contact-form', {
          boxShadow: '0 0 40px rgba(34,211,238,0.15)',
          duration: 0.5,
        })

      /*
       * =========================
       * TRUE HORIZONTAL STORYTELLING (desktop only)
       * =========================
       */

      if (!isMobile) {
        const section =
          document.querySelector('.projects-container')
        const track =
          document.querySelector('.projects-track')

        if (section && track) {
          const totalMove =
            track.getBoundingClientRect().width -
            window.innerWidth -
            70
          gsap.to(track, {
            x: -(totalMove - 10),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: `+=${totalMove}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          })
        }
      }

      /*
       * =========================
       * PARALLAX DEPTH + PARTICLES (desktop only)
       * =========================
       */

      if (!isMobile) {
        gsap.to('.bg-orb-1', {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: { scrub: true },
        })

        gsap.to('.bg-orb-2', {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: { scrub: true },
        })

        gsap.utils
          .toArray('.floating-particle')
          .forEach((particle) => {
            gsap.to(particle, {
              x: gsap.utils.random(-120, 120),
              y: gsap.utils.random(-120, 120),
              opacity: gsap.utils.random(0.1, 0.8),
              duration: gsap.utils.random(5, 10),
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            })
          })

        gsap.to('.floating-particle', {
          scale: () => gsap.utils.random(0.5, 3),
          duration: () => gsap.utils.random(2, 5),
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.1, repeat: 0 },
        })
      }

      /*
       * =========================
       * MOBILE SCROLL REVEALS
       * =========================
       */

      if (isMobile) {
        const mobileObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
              }
            })
          },
          {
            threshold: 0.12,
            rootMargin: '0px 0px -30px 0px',
          }
        )

        document
          .querySelectorAll(
            '.mobile-reveal-card, .mobile-reveal-text'
          )
          .forEach((el) => {
            mobileObserver.observe(el)
          })
      }

      /*
       * =========================
       * FOOTER FINALE
       * =========================
       */

      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
        },
      })

      footerTl
        .from('.footer-label', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power4.out',
        })
        .from(
          '.footer-title',
          {
            y: isMobile ? 60 : 180,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out',
          },
          '-=0.3'
        )
        .from(
          '.footer-copy',
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.7'
        )
    })

    return () => {
      ctx.revert()
    }
  }, [loading])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = 'auto'

      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('scroll'))
      })
    }, 6500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div
          className="
          absolute right-[-120px] top-[20%]
          hidden h-[400px] w-[400px] rounded-full bg-cyan-400/8 blur-[140px]
          sm:block
          "
        />
        <div
          className="
          absolute bottom-[15%] right-[-80px]
          hidden h-[280px] w-[280px] rounded-full bg-blue-500/8 blur-[120px]
          sm:block
          "
        />
      </div>

      {/* background particles - reduced on mobile */}
      {Array.from({
        length: isMobile ? 0 : 35,
      }).map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-orb-1 absolute left-[-10%] top-[10%] hidden h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl sm:block" />
        <div className="bg-orb-2 absolute right-[-10%] top-[30%] hidden h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl sm:block" />
      </div>

      <LoaderScreen />

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease',
        }}
      >
        <Header />

        <main className="relative z-10 space-y-8 sm:space-y-12 md:space-y-100">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </div>
  )
}
