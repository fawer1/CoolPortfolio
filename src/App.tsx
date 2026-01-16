import './index.css'
import ScrollSection from './components/ScrollSection';
import ColorBends from './components/BackgroundLayer';

export default function App() {

  return (
    <>
      <main className="text-white fixed inset-0 z-10 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr]">
        {/* Grid cell borders overlay */}
        <div className="absolute inset-0 grid grid-cols-[1fr_4fr_4fr_1fr] grid-rows-[1fr_4fr_4fr_1fr] pointer-events-none">
          {[1, 2, 3, 4].map((r) => (
            [1, 2, 3, 4].map((c) => (
              <div
                key={`cell-${r}-${c}`}
                className={
                  `col-start-${c} row-start-${r} border border-neutral-300/10 relative ` +
                  `${r === 2 ? 'border-b-0 ' : ''}` +
                  `${r === 3 ? 'border-t-0 ' : ''}`
                }
              >
              </div>
            ))
          ))}
        </div>
        <ScrollSection />
      </main>
      <ColorBends
        rotation={0}
        autoRotate={0}
        speed={.03}
        scale={1.5}
        frequency={1}
        mouseInfluence={1}
        noise={0}
        colors={["#1f1f1f", "#1f1f1f", "#1f1f1f"]}
      />
    </>
  )
}