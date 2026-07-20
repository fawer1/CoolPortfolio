import './index.css'
import ColorBends from './components/BackgroundLayer'
import ShinyText from './components/GlowingText'
import { AnimatePresence, motion } from 'framer-motion'
import tryImage from './assets/tryimage.jpg'
import { useEffect } from 'react'

export default function CbrLearnerPage() {
    useEffect(() => {
        const previousBodyOverflow = document.body.style.overflow
        const previousHtmlOverflow = document.documentElement.style.overflowY

        document.body.style.overflow = 'auto'
        document.documentElement.style.overflowY = 'auto'

        return () => {
            document.body.style.overflow = previousBodyOverflow
            document.documentElement.style.overflowY = previousHtmlOverflow
        }
    }, [])

    return (
        <>
            <main className=" text-white ">
                {/*grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr]*/}

                {/* <div className="absolute inset-0 z-1 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr] pointer-events-none">
          {[1, 2, 3, 4].map((r) => (
            [1, 2, 3, 4].map((c) => (
              <div
                key={`cell-${r}-${c}`}
                className={`col-start-${c} row-start-${r} border border-neutral-500/10 relative ${r === 2 ? 'border-b-0 ' : ''}${r === 3 ? 'border-t-0 ' : ''}`}
              />
            ))
          ))}
        </div> */}

                <AnimatePresence>
                    <div className="grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-1 items-center">

                        <motion.div
                            key="portfolio-title"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="col-start-1 flex justify-center items-center"
                        >
                            <ShinyText
                                className='text-4xl tracking-wider waterfall'
                                text='Portfolio'
                                color="#e7000b"
                                shineColor="#91080f"
                                yoyo
                            />

                        </motion.div>

                        <motion.div
                            key="top-right-brand"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="col-start-4 flex justify-center items-center"
                        >
                            <div className="hanbit-brand text-red-600/70 tracking-wide text-2xl">
                                한빛
                            </div>
                        </motion.div>

                    </div>
                </AnimatePresence>
                <motion.div
                    key="center-image"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex h-full w-full overflow-hidden"
                >
                    <img
                        src={tryImage}
                        alt="CBR Learners preview"
                        className="h-full w-full "
                    />
                </motion.div>
            </main>
            <ColorBends
                rotation={0}
                autoRotate={0}
                speed={0.03}
                scale={1.5}
                frequency={1}
                mouseInfluence={1}
                noise={0}
                colors={["#000000", "#101010", "#000000"]}
            />
        </>
    )
}
