import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { pageTransition } from './lib/motion'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Method } from './pages/Method'
import { Pricing } from './pages/Pricing'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="enter"
        exit="exit"
        className="pt-24"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/tjenester" element={<Services />} />
          <Route path="/behandlingsmetode" element={<Method />} />
          <Route path="/priser" element={<Pricing />} />
          <Route path="/blogg" element={<Blog />} />
          <Route path="/blogg/:slug" element={<BlogPost />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  const reduce = useReducedMotion()
  return (
    <MotionConfig reducedMotion={reduce ? 'always' : 'never'}>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </MotionConfig>
  )
}
