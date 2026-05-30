import { FiMapPin, FiNavigation } from 'react-icons/fi'
import { invitation } from '../data/invitation'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  invitation.mapQuery,
)}&t=&z=13&ie=UTF8&iwloc=&output=embed`

function Venue() {
  return (
    <section className="relative z-10 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Venue" title="Meet Us Under The Night Lights">
          {invitation.venue}, {invitation.location}
        </SectionHeader>

        <Reveal className="glass-card luxury-border mt-12 overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between gap-10 p-7 sm:p-10">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-xl text-gold">
                  <FiMapPin aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/70">
                  Reception Venue
                </p>
                <h3 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
                  {invitation.venue}
                </h3>
                <p className="mt-4 text-base leading-8 text-ivory/68">
                  {invitation.location}
                </p>
              </div>

              <a
                href={invitation.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="glow-button inline-flex min-h-13 w-fit items-center justify-center gap-3 rounded-full border border-gold/35 bg-deep-red/70 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ivory transition duration-300 hover:-translate-y-1"
              >
                Get Directions
                <FiNavigation aria-hidden="true" />
              </a>
            </div>

            <div className="reception-map min-h-80 border-t border-gold/15 lg:border-l lg:border-t-0">
              <iframe
                title="Reception venue map"
                src={mapSrc}
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Venue
