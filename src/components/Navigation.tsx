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

const Navigation: FC<NavigationProps> = ({ visible, onAnimationComplete }) => {
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
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navigation;
