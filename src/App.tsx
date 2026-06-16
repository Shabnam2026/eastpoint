import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BriefingProvider } from './context/BriefingContext';
import { InvestorBriefingModal } from './components/InvestorBriefingModal';

import { Home } from './pages/Home';
import { MissionAndValues } from './pages/MissionAndValues';
import { StrategyPage } from './pages/StrategyPage';
import { CriteriaPage } from './pages/CriteriaPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

export function Layout() {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
      }
      return false;
    };

    if (location.hash) {
      if (!scrollToHash()) {
        setTimeout(scrollToHash, 100);
        setTimeout(scrollToHash, 500); // Try again after transition
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Framer Motion constraints for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pageVariants = prefersReducedMotion 
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -15 },
      };

  const transitionProps = prefersReducedMotion 
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.22, 1, 0.36, 1] };

  // Hairline wipe
  const lineVariants = prefersReducedMotion ? {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 0, opacity: 0 },
    exit: { scaleX: 0, opacity: 0 }
  } : {
    initial: { scaleX: 0, originX: 0, opacity: 1 },
    animate: { scaleX: 1, originX: 0, opacity: 0, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { scaleX: 1, originX: 1, opacity: 1, transition: { duration: 0.25, ease: "easeIn" } }
  };

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={transitionProps}
          className={`relative min-h-screen ${location.pathname !== '/' ? 'pt-[80px]' : ''}`}
        >
          {location.pathname !== '/' && (
            <motion.div 
              aria-hidden="true"
              className="fixed top-[80px] left-0 w-full h-px bg-gold z-40 pointer-events-none origin-left"
              variants={lineVariants}
            />
          )}
          <main id="top" className="flex-grow">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/mission-and-values" element={<MissionAndValues />} />
              <Route path="/strategy" element={<StrategyPage />} />
              <Route path="/criteria" element={<CriteriaPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <InvestorBriefingModal />
    </>
  );
}

export default function App() {
  return (
    <BriefingProvider>
      <Layout />
    </BriefingProvider>
  );
}
