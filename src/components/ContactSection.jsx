import SectionHeading from './SectionHeading'
import { Mail, Linkedin } from 'lucide-react'

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.89-9.884a9.83 9.83 0 0 1 7.004 2.904 9.83 9.83 0 0 1 2.898 7.009c-.002 5.45-4.437 9.883-9.91 9.883m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.86 11.86 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.82 11.82 0 0 0-3.478-8.416" />
    </svg>
  )
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 py-16 sm:py-20 md:px-8 md:py-30"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT SIDE */}
        <div className="contact-copy">
          <SectionHeading
            eyebrow="Contact"
            title="Let's create a portfolio-worthy experience."
            description="Open to freelance work, collaborations, and frontend opportunities focused on strong UI and modern interaction design."
          />

          <div className="reveal flex flex-col sm:flex-row flex-wrap gap-3 text-sm text-slate-300">
            <a
              href="mailto:brijeshmy26@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 active:scale-[0.97] max-[639px]:justify-center max-[639px]:text-center"
            >
              <Mail size={16} />
              <span className="text-xs sm:text-sm max-[639px]:text-[14px] max-[639px]:font-medium max-[639px]:leading-normal">
                brijeshmy26@gmail.com
              </span>
            </a>

            <a
              href="https://wa.me/917695034561"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 active:scale-[0.97] max-[639px]:justify-center max-[639px]:text-center"
            >
              <WhatsAppIcon size={16} />
              <span className="max-[639px]:text-[14px] max-[639px]:font-medium max-[639px]:leading-normal">
                7695034561
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/brijesh-maurya-743774310/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 active:scale-[0.97] max-[639px]:justify-center max-[639px]:text-center"
            >
              <Linkedin size={16} />
              <span className="max-[639px]:text-[14px] max-[639px]:font-medium max-[639px]:leading-normal">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        {/* FORM */}
        <form
          className="contact-form reveal rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 shadow-xl shadow-black/20 md:p-8"
          onSubmit={(e) => {
            e.preventDefault()

            const form = e.target

            const name = form.name.value
            const email = form.email.value
            const message = form.message.value

            const subject = encodeURIComponent(
              `Portfolio Contact from ${name}`
            )

            const body = encodeURIComponent(
              `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
            )

            window.location.href =
              `mailto:brijeshmy26@gmail.com?subject=${subject}&body=${body}`
          }}
        >
          <div className="grid gap-4 sm:gap-5">
            {/* NAME */}
            <label className="grid gap-2 text-sm text-slate-300">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="
                  contact-field
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-4
                  py-3.5
                  sm:py-3
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-500
                  focus:border-cyan-300/40
                  focus:shadow-[0_0_20px_rgba(34,211,238,0.20)]
                "
              />
            </label>

            {/* EMAIL */}
            <label className="grid gap-2 text-sm text-slate-300">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="
                  contact-field
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-4
                  py-3.5
                  sm:py-3
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-500
                  focus:border-cyan-300/40
                  focus:shadow-[0_0_20px_rgba(34,211,238,0.20)]
                "
              />
            </label>

            {/* MESSAGE */}
            <label className="grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your idea"
                required
                className="
                  contact-field
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-4
                  py-3.5
                  sm:py-3
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-500
                  focus:border-cyan-300/40
                  focus:shadow-[0_0_20px_rgba(34,211,238,0.20)]
                "
              />
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                contact-submit
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-cyan-300
                px-6
                py-3.5
                sm:py-3
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:translate-y-[-2px]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
                active:scale-[0.97]
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
