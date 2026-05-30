import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiHeart, FiMapPin } from 'react-icons/fi'
import { invitation } from '../data/invitation'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const details = [
  {
    label: 'Reception Date',
    value: invitation.dateLabel,
    icon: FiCalendar,
  },
  {
    label: 'Time',
    value: invitation.time,
    icon: FiClock,
  },
  {
    label: 'Venue',
    value: `${invitation.venue}, ${invitation.location}`,
    icon: FiMapPin,
  },
  {
    label: 'Dress Code',
    value: invitation.dressCode,
    icon: FiHeart,
  },
]

function EventDetails() {
  return (
    <section className="relative z-10 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="The Celebration" title="Reception Details">
          A refined night reception with warm lights, deep red accents, and the people we love most.
        </SectionHeader>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal delay={index * 0.08} key={item.label}>
                <motion.article
                  className="glass-card luxury-border h-full rounded-3xl p-6 transition duration-300"
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-xl text-gold shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                    <Icon aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/68">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-7 text-ivory">
                    {item.value}
                  </h3>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EventDetails
