import Reveal from './Reveal'
import { invitation } from '../data/invitation'

function InvitationMessage() {
  return (
    <section id="invitation" className="relative z-10 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="glass-card luxury-border rounded-[2rem] px-6 py-12 text-center sm:px-12 md:px-16 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-gold/75">
            Together with our families
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl md:text-6xl">
            An evening written in candlelight.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-ivory/72 sm:text-lg md:text-xl md:leading-9">
            {invitation.message}
          </p>
          <div className="soft-divider mx-auto mt-10 max-w-xl" />
          <p className="mt-8 font-serif text-3xl text-gold sm:text-4xl">
            {invitation.couple.first} & {invitation.couple.second}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default InvitationMessage
