import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { invitation } from '../data/invitation'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function getRemainingTime(targetDate) {
  const distance = Math.max(new Date(targetDate).getTime() - Date.now(), 0)
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  return { days, hours, minutes, seconds }
}

function CountdownTimer() {
  const targetDate = invitation.dateTime
  const [remaining, setRemaining] = useState(() => getRemainingTime(targetDate))
  const units = useMemo(
    () => [
      ['Days', remaining.days],
      ['Hours', remaining.hours],
      ['Minutes', remaining.minutes],
      ['Seconds', remaining.seconds],
    ],
    [remaining],
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemainingTime(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  return (
    <section className="relative z-10 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Until The Night" title="Counting Every Moment" />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {units.map(([label, value], index) => (
            <Reveal delay={index * 0.07} key={label}>
              <motion.div
                className="glass-card luxury-border flex aspect-square min-h-36 flex-col items-center justify-center rounded-3xl p-5 text-center sm:min-h-44"
                whileHover={{ y: -5 }}
              >
                <motion.span
                  className="font-serif text-5xl font-semibold leading-none text-ivory sm:text-6xl"
                  key={value}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {String(value).padStart(2, '0')}
                </motion.span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold/70">
                  {label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountdownTimer
