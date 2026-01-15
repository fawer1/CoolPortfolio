import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode, Key } from "react";

type TextAreaProps = {
    contentKey: Key;
    children: ReactNode;
};

export default function TextArea({ contentKey, children }: TextAreaProps) {
    return (
        <div className="col-start-2 row-start-2 row-span-2 flex items-center">
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
