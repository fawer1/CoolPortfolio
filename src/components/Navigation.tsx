import { AnimatePresence, motion } from "framer-motion";
import type { FC } from "react";

type NavigationProps = {
    visible: boolean;
    canPrev: boolean;
    canNext: boolean;
    onPrev: () => void;
    onNext: () => void;
    onAnimationComplete: () => void;
};

const baseBtn = "px-3 py-2 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";
const enabledBtn = "bg-white/10 hover:bg-white/20";
const disabledBtn = "bg-white/5 opacity-50 cursor-not-allowed";

const Navigation: FC<NavigationProps> = ({ visible, canPrev, canNext, onPrev, onNext, onAnimationComplete }) => {
    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onAnimationComplete={onAnimationComplete}
                    className="col-start-3 row-start-4 flex justify-end gap-3 items-center"
                >
                    <button
                        aria-label="Previous"
                        className={`${baseBtn} ${canPrev ? enabledBtn : disabledBtn}`}
                        onClick={canPrev ? onPrev : undefined}
                        disabled={!canPrev}
                    >
                        ↑
                    </button>
                    <button
                        aria-label="Next"
                        className={`${baseBtn} ${canNext ? enabledBtn : disabledBtn}`}
                        onClick={canNext ? onNext : undefined}
                        disabled={!canNext}
                    >
                        ↓
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navigation;
