import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Loading } from './components/Loading'
import { pageTransition } from './lib/motion'

// Lazy-load routes so each page is its own chunk (smaller initial load).
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })))
const Method = lazy(() => import('./pages/Method').then((m) => ({ default: m.Method })))
const Pricing = lazy(() => import('./pages/Pricing').then((m) => ({ default: m.Pricing })))
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })))
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

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
        className="pt-24"
      >
        <Suspense fallback={<Loading />}>
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
        </Suspense>
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
