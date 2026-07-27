import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { ErrorBoundary } from './components/ErrorBoundary'
import { pageTransition } from './lib/motion'

// Pages are imported directly (not React.lazy): the app is prerendered to static
// HTML at build time via renderToString, which cannot resolve lazy() boundaries,
// and the client must hydrate the identical tree. See scripts/prerender.mjs.
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Method } from './pages/Method'
import { Pricing } from './pages/Pricing'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { NotFound } from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        id="main"
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="enter"
        exit="exit"
        className="pt-[5.375rem] sm:pt-[6.125rem]"
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
          <Route path="/personvern" element={<Privacy />} />
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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-clinic-blue focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Hopp til innhold
      </a>
      <ScrollToTop />
      <Header />
      <ErrorBoundary>
        <AnimatedRoutes />
      </ErrorBoundary>
      <Footer />
    </MotionConfig>
  )
}
