import { AnimatePresence, motion } from "framer-motion";

type MediaAreaProps = {
    contentKey: string;
    children: React.ReactNode;
};

export default function MediaArea({ contentKey, children }: MediaAreaProps) {
    return (
        <div className="col-start-3 row-start-2 row-span-2 flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={contentKey}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
