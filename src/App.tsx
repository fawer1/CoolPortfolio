import './index.css'
import ScrollSection from './components/ScrollSection';
import ColorBends from './components/BackgroundLayer';
import LoadingScreen from './components/LoadingScreen';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShinyText from './components/GlowingText';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [brandVisible, setBrandVisible] = useState(false);
  const contentVisible = !showLoader;
  useEffect(() => {
    let t: number | undefined;
    if (contentVisible) {
      t = window.setTimeout(() => setBrandVisible(true), 750); // wait for grid to finish animating in
    }
    return () => {
      if (t) clearTimeout(t);
      setBrandVisible(false);
    };
  }, [contentVisible]);
  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showLoader && (
        <LoadingScreen
          durationMs={5000}
          inMs={1000}
          outMs={1200}
          onComplete={() => setShowLoader(false)}
        />
      )}
      <main className={
        `text-white fixed inset-0 z-10 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr] ` +
        `${contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.7]'} ` +
        `transition-opacity duration-700 ease-out`
      }>
        {/* Top-right brand after loading */}
        <AnimatePresence>
          {brandVisible && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="col-start-4 row-start-1 flex justify-center items-center"
            >
              <div className="hanbit-brand text-red-600/70 tracking-wide text-2xl">
                한빛
              </div>
            </motion.div>
          )}
          {brandVisible && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="col-start-1 row-start-1 flex justify-center items-center"
            >
              <ShinyText
                className='text-3xl tracking-wider ibarra'
                text='Portfolio'
                color="#e7000b"
                shineColor="#91080f"
                yoyo
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Grid cell borders overlay */}
        <div className="absolute inset-0 z-0 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr] pointer-events-none">
          {[1, 2, 3, 4].map((r) => (
            [1, 2, 3, 4].map((c) => (
              <div
                key={`cell-${r}-${c}`}
                className={
                  `col-start-${c} row-start-${r} border border-neutral-500/10 relative ` +
                  `${r === 2 ? 'border-b-0 ' : ''}` +
                  `${r === 3 ? 'border-t-0 ' : ''}`
                }
              >
              </div>
            ))
          ))}
        </div>
        <ScrollSection />
      </main>
      <ColorBends
        rotation={0}
        autoRotate={0}
        speed={.03}
        scale={1.5}
        frequency={1}
        mouseInfluence={1}
        noise={0}
        colors={["#000000", "#101010", "#000000"]}
      />
    </>
  )
}