import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const sections = [
    {
        id: "projects",
        showArrows: true,
        textCol: 2,
        mediaCol: 3,
        // steps: [...]
    },
    {
        id: "about",
        showArrows: false,
        textCol: 2,
        mediaCol: 3,
        // steps: [...]
    }
];


export default function ScrollSection() {
    const [index, setIndex] = useState(0);
    const isAnimating = useRef(false);

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (isAnimating.current) return;

            if (e.deltaY > 0 && index < contents.length - 1) {
                isAnimating.current = true;
                setIndex((prev) => prev + 1);
            }

            if (e.deltaY < 0 && index > 0) {
                isAnimating.current = true;
                setIndex((prev) => prev - 1);
            }
        };

        window.addEventListener("wheel", onWheel, { passive: true });
        return () => window.removeEventListener("wheel", onWheel);
    }, [index]);

    return (
        <section className="h-screen flex items-center justify-center">
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    isAnimating.current = false;
                }}
            >
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center max-w-xl"
                >
                    <h1 className="text-6xl font-bold mb-6">
                        {contents[index].title}
                    </h1>
                    <p className="text-xl text-neutral-300">
                        {contents[index].text}
                    </p>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
