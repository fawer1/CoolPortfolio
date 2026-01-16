export default function NoiseLayer() {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-10 opacity-[0.035]"
            style={{
                backgroundImage: "url('./assets/noise.png')",
                backgroundRepeat: "repeat",
                mixBlendMode: "overlay",
            }}
        />
    );
}
