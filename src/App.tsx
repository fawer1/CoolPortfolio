import ScrollSection from './components/ScrollSection';

export default function App() {

  return (
    <main className="bg-neutral-950 text-white fixed inset-0 grid grid-cols-[64px_1fr_1fr_64px] grid-rows-[80px_1fr_1fr_80px]">
      <ScrollSection />
      {/* <Header />
        <TextArea />
        <MediaArea />
        <Navigation /> */}
    </main>
  )
}