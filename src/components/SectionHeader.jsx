import Reveal from './Reveal'

function SectionHeader({ eyebrow, title, children }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-gold/75">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ivory/68 sm:text-lg">
          {children}
        </p>
      ) : null}
    </Reveal>
  )
}

export default SectionHeader
