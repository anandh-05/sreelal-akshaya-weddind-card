import { motion } from 'framer-motion'

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 7) % 100}%`,
  top: `${(index * 47 + 11) % 100}%`,
  delay: (index % 9) * 0.35,
  duration: 7 + (index % 6),
  size: 2 + (index % 3),
}))

function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-light" />
      <motion.div
        className="light-leak -left-24 top-24"
        animate={{ opacity: [0.18, 0.34, 0.2], scale: [0.9, 1.08, 0.95] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="light-leak -right-20 bottom-16 bg-gold"
        animate={{ opacity: [0.08, 0.2, 0.1], scale: [1, 1.16, 1.02] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      {particles.map((particle) => (
        <motion.span
          aria-hidden="true"
          className="particle"
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0, 0.75, 0],
            y: [16, -28, -54],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundEffects
