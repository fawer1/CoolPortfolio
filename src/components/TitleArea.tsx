import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode, Key } from "react";

type TitleAreaProps = {
    contentKey: Key;
    children: ReactNode;
};

export default function TextArea({ contentKey, children }: TitleAreaProps) {
    return (
        <div className="col-start-1 row-start-1 row-span-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={contentKey}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-md"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
