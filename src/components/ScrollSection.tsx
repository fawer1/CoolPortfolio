import { useState, useRef, useEffect, useCallback } from "react";
import { sections } from "../data/sections";
import TextArea from "./TextArea";
import MediaArea from "./MediaArea";
import GridFrame from "./GridFrame";
import Navigation from "./Navigation.tsx";

export default function ScrollLayout() {
    const [sectionIndex, setSectionIndex] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const isAnimating = useRef(false);

    const section = sections[sectionIndex];
    const step = section.steps[stepIndex];
    const contentKey = `${sectionIndex}-${stepIndex}`;

    const goDown = useCallback(() => {
        if (stepIndex < section.steps.length - 1) {
            setStepIndex((s) => s + 1);
        } else if (sectionIndex < sections.length - 1) {
            setSectionIndex((s) => s + 1);
            setStepIndex(0);
        }
    }, [sectionIndex, stepIndex, section.steps.length]);

    const goUp = useCallback(() => {
        if (stepIndex > 0) {
            setStepIndex((s) => s - 1);
        } else if (sectionIndex > 0) {
            const prevSection = sections[sectionIndex - 1];
            setSectionIndex((s) => s - 1);
            setStepIndex(prevSection.steps.length - 1);
        }
    }, [sectionIndex, stepIndex]);

    //NORMAL MOUSE NAVIGATION
    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (isAnimating.current) return;
            if (Math.abs(e.deltaY) < 30) return;

            isAnimating.current = true;
            if (e.deltaY > 0) {
                goDown();
            } else {
                goUp();
            }
            // Debounce: reset after animation duration (~600ms)
            setTimeout(() => (isAnimating.current = false), 650);
        };

        window.addEventListener("wheel", onWheel, { passive: true });
        return () => window.removeEventListener("wheel", onWheel);
    }, [goDown, goUp]);

    // KEYBOARD NAVIGATION
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (isAnimating.current) return;
            if (e.key === "ArrowDown" || e.key === "PageDown") {
                isAnimating.current = true;
                goDown();
                setTimeout(() => (isAnimating.current = false), 650);
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                isAnimating.current = true;
                goUp();
                setTimeout(() => (isAnimating.current = false), 650);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goDown, goUp]);

    // TOUCH NAVIGATION
    const touchStartY = useRef<number | null>(null);
    useEffect(() => {
        const onTouchStart = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                touchStartY.current = e.touches[0].clientY;
            }
        };
        const onTouchEnd = (e: TouchEvent) => {
            if (isAnimating.current) return;
            const startY = touchStartY.current;
            touchStartY.current = null;
            if (startY == null) return;
            const endY = e.changedTouches[0]?.clientY ?? startY;
            const deltaY = startY - endY; // swipe up => positive
            if (Math.abs(deltaY) < 30) return;
            isAnimating.current = true;
            setTimeout(() => (isAnimating.current = false), 650);
            if (deltaY > 0) {
                goDown();
            } else {
                goUp();
            }
        };
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchend", onTouchEnd, { passive: true });
        return () => {
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, [goDown, goUp]);

    return (
        <GridFrame>
            {/* TEXT */}
            <TextArea contentKey={contentKey}>
                <h2 className="text-red-600 text-2xl mb-4">{step.title}</h2>
                <p className="text-red-600">{step.text}</p>
            </TextArea>

            {/* MEDIA */}
            <MediaArea contentKey={contentKey}>
                {"media" in step && step.media ? step.media : null}
            </MediaArea>

            {/* NAVIGATION */}
            <Navigation
                visible={section.steps.length > 1}
                canPrev={stepIndex > 0 || sectionIndex > 0}
                canNext={stepIndex < section.steps.length - 1 || sectionIndex < sections.length - 1}
                onPrev={() => {
                    if (!isAnimating.current) {
                        isAnimating.current = true;
                        goUp();
                    }
                }}
                onNext={() => {
                    if (!isAnimating.current) {
                        isAnimating.current = true;
                        goDown();
                    }
                }}
                onAnimationComplete={() => {
                    isAnimating.current = false;
                }}
            />
            <div className="col-start-4 row-start-4" aria-hidden />
        </GridFrame>
    );
}
