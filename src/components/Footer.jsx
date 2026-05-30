import Reveal from './Reveal'
import { invitation } from '../data/invitation'

function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-10 pt-16 sm:px-8 md:pt-24">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center border-t border-gold/15 pt-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/35 bg-black/35 font-serif text-2xl font-semibold text-gold shadow-[0_0_44px_rgba(212,175,55,0.16)]">
          {invitation.couple.initials}
        </div>
        <p className="mt-7 max-w-2xl font-serif text-3xl leading-tight text-ivory sm:text-4xl">
          Thank you for being part of our beautiful beginning.
        </p>
        <p className="mt-5 text-sm uppercase tracking-[0.28em] text-ivory/45">
          {invitation.couple.first} & {invitation.couple.second}
        </p>
      </Reveal>
    </footer>
  )
}

export default Footer
