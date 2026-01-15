import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollSection from './components/ScrollSection';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)


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