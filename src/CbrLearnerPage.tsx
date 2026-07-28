import './index.css'
import ScrollSection from './components/ScrollSection'
import ColorBends from './components/BackgroundLayer'
import { AnimatePresence, motion } from 'framer-motion'
import { cbrSections } from './data/cbrSections.tsx'
import GridProgressLine from './components/GridProgressLine'
import { useState } from 'react'
import ShinyText from './components/GlowingText.tsx'

export default function CbrLearnerPage() {
    const [progress, setProgress] = useState(0)

    return (
        <>
            <main className={
                `text-white fixed inset-0 z-10 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr] ` +
                `opacity-100 scale-100 ` +
                `transition-opacity duration-700 ease-out`
            }>
                <GridProgressLine progress={progress} anchor="top" />
                <AnimatePresence>
                    <motion.div
                        key="top-right-brand"
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

                    <motion.div
                        key="portfolio-title"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="col-start-1 row-start-1 flex justify-center items-center"
                    >
                        <ShinyText
                            className='text-4xl tracking-wider waterfall'
                            text='Portfolio'
                            color="#e7000b"
                            shineColor="#91080f"
                            yoyo
                        />
                    </motion.div>
                </AnimatePresence>

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
                            />
                        ))
                    ))}
                </div>

                <ScrollSection
                    sections={cbrSections}
                    contentPrefix="cbr"
                    onPositionChange={({ overallStepIndex, totalSteps }) => {
                        setProgress(totalSteps <= 1 ? 1 : overallStepIndex / (totalSteps - 1))
                    }}
                />
            </main>

            <ColorBends
                rotation={0}
                autoRotate={0}
                speed={0.03}
                scale={1.5}
                frequency={1}
                mouseInfluence={1}
                noise={0}
                colors={['#000000', '#101010', '#000000']}
            />
        </>
    )
}