import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CbrLearnerPage from './CbrLearnerPage'

const rootEl = document.getElementById('root')
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <CbrLearnerPage />
    </StrictMode>,
  )
}
