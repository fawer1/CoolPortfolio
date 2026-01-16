export default function BackgroundLayer() {
    return (
        <>
            {/* Animated gradient background layer */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundSize: "200% 200%",
                    backgroundImage: "linear-gradient(120deg, #0a0a0a, #0e0e0e, #121213)",
                    animation: "slowGradient 30s ease-in-out infinite",
                }}
            />
            {/* Noise overlay layer */}
            <div
                className="fixed inset-0 z-20 pointer-events-none opacity-[0.035]"
                style={{
                    backgroundImage: "url('../assets/noise.png')",
                    backgroundRepeat: "repeat",
                    mixBlendMode: "overlay",
                }}
            />
        </>
    );
}
