import { motion } from 'framer-motion'
import { FiCalendar, FiChevronDown, FiMapPin } from 'react-icons/fi'
import heroBackdrop from '../assets/reception-backdrop.png'
import { invitation } from '../data/invitation'

const lineVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

function Hero() {
  return (
    <section className="subtle-noise relative z-10 flex min-h-[96svh] items-center justify-center overflow-hidden px-5 py-10 sm:px-8">
      <img
        src={heroBackdrop}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-68"
      />
      <div className="hero-vignette" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent" />

      <motion.div
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.14 }}
      >
        <motion.div
          variants={lineVariants}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-black/28 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold/85 backdrop-blur-md"
        >
          <span className="h-px w-8 bg-gold/45" />
          {invitation.eventName}
          <span className="h-px w-8 bg-gold/45" />
        </motion.div>

        <motion.h1
          variants={lineVariants}
          className="max-w-5xl font-serif text-6xl font-semibold leading-[0.92] text-ivory drop-shadow-[0_0_34px_rgba(212,175,55,0.16)] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="block">{invitation.couple.first}</span>
          <span className="gold-text my-1 block text-5xl font-medium sm:text-6xl md:text-7xl">
            &
          </span>
          <span className="block">{invitation.couple.second}</span>
        </motion.h1>

        <motion.div
          variants={lineVariants}
          className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-ivory/78 sm:flex-row sm:flex-wrap sm:gap-5"
        >
          <span className="inline-flex items-center gap-2">
            <FiCalendar className="text-gold" aria-hidden="true" />
            {invitation.dateLabel}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-gold/55 sm:block" />
          <span className="inline-flex items-center gap-2">
            <FiMapPin className="text-gold" aria-hidden="true" />
            {invitation.venue}, {invitation.location}
          </span>
        </motion.div>

        <motion.a
          variants={lineVariants}
          href="#invitation"
          className="glow-button group mt-10 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-gold/35 bg-gradient-to-r from-deep-red/80 via-crimson/70 to-deep-red/80 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ivory transition duration-300"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Open Invitation
          <FiChevronDown
            className="text-lg transition-transform duration-300 group-hover:translate-y-1"
            aria-hidden="true"
          />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
