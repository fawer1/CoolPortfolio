import { useEffect, useRef, useState } from 'react';

interface LoadingScreenProps {
    durationMs?: number; // total time including enter/hold/exit
    inMs?: number;       // enter animation duration
    outMs?: number;      // exit animation duration
    gapMs?: number;      // small pause between hold and exit for natural timing
    settleMs?: number;   // subtle settle animation duration during hold
    onComplete?: () => void;
}

export default function LoadingScreen({
    durationMs = 5000,
    inMs = 1000,
    outMs = 1200,
    gapMs = 350,
    settleMs = 800,
    onComplete,
}: LoadingScreenProps) {
    const [phase, setPhase] = useState<'enter' | 'hold' | 'exit' | 'done'>('enter');
    const timers = useRef<number[]>([]);

    useEffect(() => {
        const total = Math.max(durationMs, inMs + outMs + gapMs);
        const holdMs = Math.max(0, total - inMs - outMs - gapMs);

        // schedule phase transitions
        timers.current.push(window.setTimeout(() => setPhase('hold'), inMs));
        // add a small natural pause between hold and exit
        timers.current.push(window.setTimeout(() => setPhase('exit'), inMs + holdMs + gapMs));
        timers.current.push(window.setTimeout(() => setPhase('done'), inMs + holdMs + gapMs + outMs));

        return () => {
            timers.current.forEach((t) => clearTimeout(t));
            timers.current = [];
        };
    }, [durationMs, inMs, outMs, gapMs]);

    useEffect(() => {
        if (phase === 'done') {
            onComplete?.();
        }
    }, [phase, onComplete]);

    if (phase === 'done') return null;

    const textClass =
        phase === 'enter'
            ? 'hanbit-enter'
            : phase === 'hold'
                ? 'hanbit-hold'
                : phase === 'exit'
                    ? 'hanbit-exit'
                    : '';

    const veilClass =
        phase === 'enter'
            ? 'hanbit-veil-enter'
            : phase === 'hold'
                ? 'hanbit-veil-hold'
                : phase === 'exit'
                    ? 'hanbit-veil-exit'
                    : '';

    return (
        <div
            className="fixed inset-0 z-50 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr]"
            style={{
                ['--hanbit-in' as string]: `${inMs}ms`,
                ['--hanbit-out' as string]: `${outMs}ms`,
                ['--hanbit-settle' as string]: `${settleMs}ms`,
                ['--hanbit-veil' as string]: `0.35`,
            }}
        >
            {/* Veil to blend with background */}
            <div className={`absolute inset-0 bg-black ${veilClass}`} />
            {/* Center area aligned to grid */}
            <div className="col-start-2 col-end-4 row-start-2 row-end-4 flex items-center justify-center">
                <div
                    className={`${textClass} text-white font-bold select-none`}
                    style={{
                        willChange: 'transform, opacity',
                        fontSize: '45vh',
                        letterSpacing: '0.02em',
                    }}
                >
                    한빛
                </div>
            </div>
        </div>
    );
}
