import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function LoaderScreen() {

  const titleRef = useRef(null)

  const [hidden, setHidden] = useState(false)

const vw = window.innerWidth
const vh = window.innerHeight

const isPhone = vw < 640
const isTablet = vw >= 640 && vw < 1024

const CONFIG = {
  particleCount:
    isPhone ? 160 :
    isTablet
      ? Math.round(Math.min(260, Math.max(190, vw * vh / 4000)))
      : 300,

  spread:
    isPhone
      ? Math.max(vw, vh) * 0.55
      : isTablet
        ? Math.max(vw, vh) * 0.58
        : Math.max(vw, vh) * 0.75,

  releaseVelocity:
    isPhone
      ? Math.min(vw, vh) * 0.95
      : isTablet
        ? Math.min(vw, vh) * 0.42
        : Math.min(vw, vh) * 1,

  particleSizeMin:
    isPhone ? 2 : isTablet ? 2.5 : 3,

  particleSizeMax:
    isPhone ? 6 : isTablet ? 7 : 8,
}

const [particleData] = useState(() =>
  Array.from({ length: CONFIG.particleCount }).map(() => ({
    x: gsap.utils.random(
      -CONFIG.spread,
      CONFIG.spread
    ),

    y: gsap.utils.random(
      -CONFIG.spread,
      CONFIG.spread
    ),

   size: gsap.utils.random(
CONFIG.particleSizeMin,
CONFIG.particleSizeMax
)
  }))
)

  useEffect(() => {

    gsap.set('.loader-letter', {
      opacity: 0,
      y: 40,
      scale: 1.2,
      filter: 'blur(10px)',
    })

    gsap.set('.loader-tagline', {
      opacity: 0,
    })

    gsap.set('.loader-core', {
      opacity: 0,
      scale: 0,
    })

   gsap.set('.gravity-field', {
  opacity: 0,
  scale: 0,
})

    gsap.set('.loader-energy', {
      opacity: 0,
      scale: 0,
    })
   gsap.set('.loader-particle', {
  opacity: 0.6,
  scale: 1,
})





    const particles =
  gsap.utils.toArray('.loader-particle')

gsap.killTweensOf('.loader-particle')

      particles.forEach((particle) => {

  const matrix =
    new DOMMatrix(
      getComputedStyle(particle).transform
    )

  gsap.set(particle, {
    x: matrix.m41,
    y: matrix.m42,
  })

})


const idleAnimations = []

    const tl = gsap.timeline({
      onComplete: () => setHidden(true),
    })

const titleRect =
  titleRef.current?.getBoundingClientRect()

const textRadiusX =
(titleRect?.width || vw * 0.55) * 0.65

const textRadiusY =
(titleRect?.height || 120) * 1.4

const pushDistance =
  Math.min(vw, vh) *
  (isPhone ? 0.18 : isTablet ? 0.16 : 0.20)  // psuh the particles when words revealing//  

const repelParticles = () => {

  particles.forEach((particle) => {

    const x = Number(gsap.getProperty(particle, "x"))
    const y = Number(gsap.getProperty(particle, "y"))

    const nx = x / textRadiusX
    const ny = y / textRadiusY

    const distance = Math.sqrt(nx * nx + ny * ny)

    // Start repelling BEFORE reaching the text
    const influenceRadius = 1.35

    if (distance > influenceRadius) return

    // Smooth force (0 → 1)
    const force = gsap.utils.clamp(
      0,
      1,
      (influenceRadius - distance) / influenceRadius
    )

    const angle = Math.atan2(y, x)

    // Force increases gradually
    const repel =
      pushDistance *
      force *
      force *
      0.12

    gsap.set(particle, {

      x:
        x + Math.cos(angle) * repel,

      y:
        y + Math.sin(angle) * repel,

    })

  })

}  


particles.forEach((particle) => {

  idleAnimations.push(

    gsap.to(particle, {

      scale: () =>
        gsap.utils.random(0.8, 1.2),

      opacity: () =>
        gsap.utils.random(0.3, 1),

      duration: gsap.utils.random(1, 3),

      repeat: -1,

      yoyo: true,

      ease: 'sine.inOut',

    })

  )

})




/*
====================
PHASE 1
STARS FEEL GRAVITY
====================
*/

tl.to('.gravity-field', {

  opacity: 0.25,

  scale: 6,

  duration: 0.8,

  ease: 'power2.out',

})

/*
====================
PHASE 2
SPIRAL INWARD
====================
*/

.to('.loader-particle', {

  x: 0,

  y: 0,

   backgroundColor: '#67e8f9',

  boxShadow:
'0 0 8px rgba(103,232,249,.7)',

  rotation: () =>
    gsap.utils.random(-540, 540),

  scale: () =>
    gsap.utils.random(0.03, 0.12),

  opacity: 1,

  duration: 1.6,

  stagger: {
    each: 0.001,
  },

  ease: 'expo.in',

})

.to('.gravity-field', {

  opacity: 0.4,

  scale: 10,

  duration: 1.2,

}, '-=2.5')


.to('.loader-particle', {

  scale: () =>
    gsap.utils.random(0.02, 0.08),

  duration: 0.8,

}, '-=1.2')


.to('.loader-particle', {

  rotation: () =>
    gsap.utils.random(-40, 40),

  duration: 0.15,

  repeat: 4,

  yoyo: true,

}, '-=0.6')

/*
====================
PHASE 6
ENERGY BUILDUP
====================
*/


.to('.loader-singularity-glow', {

  opacity: 1,

  scale: 4,

  duration: 0.6,

  ease: 'power4.in',

}, '<')



.to('.gravity-field', {

  opacity: 0.8,

  scale: 18,

  duration: 0.5,

  ease: 'power4.in',

}, '-=0.6')

.to('.loader-screen', {

  filter: 'brightness(1.8)',

  duration: 0.08,

})

.to('.loader-screen', {

  filter: 'brightness(1)',

  duration: 0.08,

})


.to('.loader-energy-core', {

  opacity: 1,

  scale: 30,

  duration: 0.35,

  ease: 'expo.in',

}, '<') 
    /*
    ====================
    FLASH
    ====================
    */

 .to('.loader-screen', {

  filter: 'brightness(2.8)',

  duration: 0.12,

}, '<')

.to('.loader-screen', {

  filter: 'brightness(1)',

  duration: 0.18,

})

    .to('.loader-flash', {

      opacity: 1,

      scaleX: 50,

      duration: 0.25,

      ease: 'power4.out',

    }, '<')

  .to('.loader-particle', {

  opacity: 1,

  scale: 0.2,

  duration: 0.25,

}, '<')

tl.call(() => {

  idleAnimations.forEach(anim => {
    anim.pause()
  })

})

    /*
    ====================
    RELEASE
    ====================
    */


.to('.loader-singularity-glow', {

  opacity: 0,

  scale: 8,

  duration: 0.08,

  ease: 'none',

}, '<')



   .to('.loader-particle', {
    
    rotation: () =>
 gsap.utils.random(-720,720),

x: () => {

  const angle =
    gsap.utils.random(0, Math.PI * 2)

 const velocity = gsap.utils.random(
  CONFIG.releaseVelocity,
  CONFIG.releaseVelocity * 1.4
)

  return Math.cos(angle) * velocity

},

y: () => {

  const angle =
    gsap.utils.random(0, Math.PI * 2)

  const velocity = gsap.utils.random(
  CONFIG.releaseVelocity,
  CONFIG.releaseVelocity * 1.4
)

  return Math.sin(angle) * velocity

},

  scale: () =>
  gsap.utils.random(0.5, 1.5),      //released particles size //

  opacity: () =>
    gsap.utils.random(0.3, 1),

  duration: () =>
  gsap.utils.random(1.4, 2.8),

ease: 'expo.out',

  stagger: {
    each: 0.0002,
  },

}, '<')

.to('.gravity-field', {

  opacity: 0,

  scale: 80,

  duration: 0.08,

  ease: 'none',

}, '<')

.to('.loader-energy-core', {

  opacity: 0,

  scale: 60,

  duration: 0.08,

  ease: 'none',

}, '<')

.to('.loader-particle', {

  scale: (i, el) =>
    gsap.getProperty(el, 'scale') * 1.15,

  duration: 0.5,

  ease: 'none',

})

.to('.loader-particle', {

  backgroundColor: '#ffffff',

  boxShadow:
'0 0 8px rgba(103,232,249,.7)',

  duration: 0.8,

  ease: 'power1.out',

}, '-=0.8')

.to('.loader-particle', {

  opacity: (i, el) => {

    const x = Number(gsap.getProperty(el, "x"))
    const y = Number(gsap.getProperty(el, "y"))

    const inside =
      ((x * x) / (textRadiusX * textRadiusX)) +
      ((y * y) / (textRadiusY * textRadiusY)) < 1

    return inside ? 0.12 : 0.45

  },

  duration: 0.5,

}, "-=0.2")


    .to('.loader-flash', {
      opacity: 0,
      duration: 0.5,
    }, '<')

   /*
====================
NAME REVEAL
====================
*/

.call(() => {
  gsap.ticker.add(repelParticles)
})

.to('.loader-letter', {

  opacity: 1,

  y: 0,

  scale: 1,

  filter: 'blur(0px)',

  color: '#67e8f9',

  textShadow:
    '0 0 25px rgba(103,232,249,.9)',

  stagger: 0.05,

  duration: 0.45,

  ease: 'power4.out',

})

.to('.loader-letter', {

  color: '#ffffff',

  textShadow:
    '0 0 0px rgba(103,232,249,0)',

  duration: 1,

})

/*
====================
TAGLINE
====================
*/

.to('.loader-tagline', {

  opacity: 1,

  duration: 1,

})

.call(() => {
  gsap.ticker.remove(repelParticles)
})
    /*
    ====================
    EXIT
    ====================
    */

    .to('.loader-screen', {

      opacity: 0,

      duration: 1.5,

      delay: 0.15,

    })

  return () => {
    tl.kill()
    gsap.ticker.remove(repelParticles)
    idleAnimations.forEach(anim => anim.kill())
  }
}, [])

  if (hidden) return null

  return (

    <div className="loader-screen fixed inset-0 z-[9999] bg-[#050816] overflow-hidden">

      <div className="loader-energy-core" />
      <div className="loader-singularity-glow" />
      <div className="gravity-field" />

     


      {particleData.map((particle, i) => {

        return (

          <div
            key={i}
            className="loader-particle"
      style={{
  left: '50%',
  top: '50%',
  width: `${particle.size}px`,
height: `${particle.size}px`,
transform: `translate(${particle.x}px, ${particle.y}px)`,
}}
          />

        )

      })}


      <div className="absolute inset-0 flex flex-col items-center justify-center">

     <h1
  ref={titleRef}
  className="
loader-title
font-display
font-semibold
uppercase
text-white
text-[2.6rem]
leading-[0.95]
text-center
px-6
sm:text-[3rem]
md:text-4xl
lg:text-5xl
">

          {'WELCOME TO MY UNIVERSE'.split('').map((letter, i) => (

           <span
  key={i}
  className="loader-letter inline-block"
  style={{
    opacity: 0,
    transform: 'translateY(40px)',
  }}
>
              {letter === ' '
                ? '\u00A0'
                : letter}
            </span>

          ))}

        </h1>

        <p
  className="
loader-tagline
mt-6
px-6
text-center
text-[11px]
sm:text-xs
uppercase
tracking-[0.22em]
sm:tracking-[0.35em]
text-slate-500
"
  style={{ opacity: 0 }}
>

          Scroll to discover the story.

        </p>

      </div>

    </div>

  )
}