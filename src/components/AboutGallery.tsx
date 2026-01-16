import type { FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

type GalleryImage = {
    src: string;
    alt?: string;
};

type AboutGalleryProps = {
    images: GalleryImage[];
    autoplay?: boolean;      // auto-advance
    intervalMs?: number;     // autoplay interval
    // legacy props for compatibility; ignored
    columns?: number;
    gap?: number;
};

const AboutGallery: FC<AboutGalleryProps> = ({
    images,
    autoplay = true,
    intervalMs = 4000,
}) => {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);
    const pausedRef = useRef(false);

    const next = useCallback(() => {
        setIndex((i) => (images.length ? (i + 1) % images.length : 0));
    }, [images.length]);

    const prev = useCallback(() => {
        setIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0));
    }, [images.length]);

    useEffect(() => {
        if (!autoplay || images.length <= 1) return;
        const start = () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
            timerRef.current = window.setInterval(() => {
                if (!pausedRef.current) next();
            }, Math.max(intervalMs, 1000));
        };
        start();
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
            timerRef.current = null;
        };
    }, [autoplay, intervalMs, next, images.length]);


    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Slides */}
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img.src}
                    alt={img.alt ?? ''}
                    className={`absolute inset-0 w-full h-full mask-b-from-50% mask-t-from-50% contrast-50 grayscale-50 sepia-30 object-cover transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    draggable={true}
                />
            ))}

            {/* Left/Right arrows */}
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/60 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/60 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};

export default AboutGallery;