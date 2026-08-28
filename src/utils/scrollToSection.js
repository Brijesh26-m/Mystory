export const scrollToSection = (id) => {
  const target = document.querySelector(id)

  if (!target) return

  window.lenis?.scrollTo(target, {
    duration: 3,
  })
}