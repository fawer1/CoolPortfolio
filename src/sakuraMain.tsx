import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SakuraPage from './sakuraPage'

const rootEl = document.getElementById('root')
if (rootEl) {
    createRoot(rootEl).render(
        <StrictMode>
            <SakuraPage />
        </StrictMode>,
    )
}
