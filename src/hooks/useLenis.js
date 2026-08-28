import Lenis from 'lenis'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 2.2,
      smoothWheel: true,
      smoothTouch: false,
    })
    window.lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    gsap.ticker.lagSmoothing(0)

    return () => {
  gsap.ticker.remove(update)

  delete window.lenis

  lenis.destroy()
}

  }, [])

}