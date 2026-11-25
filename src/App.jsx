import TopHeader from "./components/common/TopHeader"
import Footer from "./components/common/Footer"
import { AnimatePresence, motion } from "framer-motion"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Toolbox from "./pages/Toolbox"
import Projects from "./pages/Projects"
import Gallery from "./pages/Gallery"
import NotFound from "./pages/NotFound"

/** Route transition: a quick, subtle cross-fade (opacity only). */
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.12, ease: "easeIn" } },
}

/**
 * App is the root component: it renders the persistent header/footer shell
 * and cross-fades between routed pages.
 *
 * @returns {JSX.Element}
 */
export default function App() {
  const location = useLocation()

  return (
    <div className="theme-page-root">
      <TopHeader />

      <main className="theme-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-full"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/toolbox" element={<Toolbox />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}