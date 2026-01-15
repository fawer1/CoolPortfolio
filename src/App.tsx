import './index.css'
import ScrollSection from './components/ScrollSection';

export default function App() {

  return (
    <main className="bg-neutral-950 text-white fixed inset-0 grid grid-cols-[64px_1fr_1fr_64px] grid-rows-[80px_1fr_1fr_80px]">
      {/* Grid cell borders overlay */}
      <div className="absolute inset-0 grid grid-cols-[64px_1fr_1fr_64px] grid-rows-[80px_1fr_1fr_80px] pointer-events-none">
        {[1, 2, 3, 4].map((r) => (
          [1, 2, 3, 4].map((c) => (
            <div
              key={`cell-${r}-${c}`}
              className={
                `col-start-${c} row-start-${r} border border-neutral-800/50 relative ` +
                `${r === 2 ? 'border-b-0 ' : ''}` +
                `${r === 3 ? 'border-t-0 ' : ''}`
              }
            >
              {/* Cross icon at internal intersections (skip outer edges) */}
              {r < 4 && c < 4 && r !== 2 && (
                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-5 h-5 pointer-events-none">
                  <div className="absolute left-1/2 top-0 w-px h-full bg-white" />
                  <div className="absolute top-1/2 left-0 h-px w-full bg-white" />
                </div>
              )}
            </div>
          ))
        ))}
      </div>
      <ScrollSection />
      {/* <Header />
        <TextArea />
        <MediaArea />
        <Navigation /> */}
    </main>
  )
}