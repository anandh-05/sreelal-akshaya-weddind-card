import { motion } from 'framer-motion'

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: 'blur(12px)',
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
