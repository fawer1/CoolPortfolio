import { useState, useRef, useEffect, useCallback } from "react";
import type { Section } from "../data/sections";
import TextArea from "./TextArea";
import MediaArea from "./MediaArea";
import GridFrame from "./GridFrame";
import Navigation from "./Navigation.tsx";

type ScrollSectionProps = {
    sections: Section[];
    contentPrefix?: string;
};

export default function ScrollLayout({ sections, contentPrefix = "content" }: ScrollSectionProps) {
    const [sectionIndex, setSectionIndex] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const isAnimating = useRef(false);
    const sectionsRef = useRef(sections);
    const positionRef = useRef({ sectionIndex: 0, stepIndex: 0 });

    useEffect(() => {
        sectionsRef.current = sections;
    }, [sections]);

    useEffect(() => {
        positionRef.current = { sectionIndex, stepIndex };
    }, [sectionIndex, stepIndex]);

    const section = sections[sectionIndex];
    const step = section.steps[stepIndex];
    const contentKey = `${contentPrefix}-${section.id}-${stepIndex}`;

    const goDown = useCallback(() => {
        const currentSections = sectionsRef.current;
        const { sectionIndex: currentSectionIndex, stepIndex: currentStepIndex } = positionRef.current;
        const currentSection = currentSections[currentSectionIndex];

        if (currentStepIndex < currentSection.steps.length - 1) {
            setStepIndex((s) => s + 1);
        } else if (currentSectionIndex < currentSections.length - 1) {
            setSectionIndex((s) => s + 1);
            setStepIndex(0);
        }
    }, []);

    const goUp = useCallback(() => {
        const currentSections = sectionsRef.current;
        const { sectionIndex: currentSectionIndex, stepIndex: currentStepIndex } = positionRef.current;

        if (currentStepIndex > 0) {
            setStepIndex((s) => s - 1);
        } else if (currentSectionIndex > 0) {
            const prevSection = currentSections[currentSectionIndex - 1];
            setSectionIndex((s) => s - 1);
            setStepIndex(prevSection.steps.length - 1);
        }
    }, []);

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
                <h2 className="text-red-600 text-6xl mb-4 waterfall">{step.title}</h2>
                <p className="text-red-600 text-xl lora">{step.text}</p>
                {"link" in step && step.link ? (
                    <a
                        href={step.link.href}
                        className="text-red-600 hover:text-red-700 underline"
                    >
                        {step.link.text}
                    </a>
                ) : null}
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
