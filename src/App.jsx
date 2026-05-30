import { motion } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'
import CountdownTimer from './components/CountdownTimer'
import EventDetails from './components/EventDetails'
import Footer from './components/Footer'
import Hero from './components/Hero'
import InvitationMessage from './components/InvitationMessage'
import Venue from './components/Venue'

function App() {
  return (
    <motion.main
      className="relative isolate min-h-svh overflow-hidden bg-night text-ivory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <BackgroundEffects />
      <Hero />
      <InvitationMessage />
      <EventDetails />
      <CountdownTimer />
      <Venue />
      <Footer />
    </motion.main>
  )
}

export default App
