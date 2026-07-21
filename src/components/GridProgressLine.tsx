import { motion } from 'framer-motion';

type GridProgressLineProps = {
    progress: number;
    anchor?: 'top' | 'bottom';
};

export default function GridProgressLine({ progress, anchor = 'top' }: GridProgressLineProps) {
    const clampedProgress = Math.max(0, Math.min(1, progress));

    return (
        <div
            className={[
                'pointer-events-none absolute inset-0 z-20 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr]',
            ].join(' ')}
        >
            <div className={anchor === 'top' ? 'col-start-2 col-end-4 row-start-1 row-end-2 flex items-end justify-center' : 'col-start-2 col-end-4 row-start-4 row-end-5 flex items-start justify-center'}>
                <div className="relative h-px w-full border-neutral-500/10">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-red-600 shadow-[0_0_12px_rgba(231,0,11,0.8)]"
                        initial={false}
                        animate={{ width: `${clampedProgress * 100}%` }}
                        transition={{ type: 'spring', stiffness: 140, damping: 24, mass: 0.35 }}
                    />
                    <motion.div
                        className="absolute top-1/2 h-1 w-2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-red-500 shadow-[0_0_10px_rgba(231,0,11,0.95)]"
                        initial={false}
                        animate={{ left: `${clampedProgress * 100}%` }}
                        transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 0.35 }}
                    />
                </div>
            </div>
        </div>
    );
}