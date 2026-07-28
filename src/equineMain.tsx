import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EquinePage from './equinePage'

const rootEl = document.getElementById('root')
if (rootEl) {
    createRoot(rootEl).render(
        <StrictMode>
            <EquinePage />
        </StrictMode>,
    )
}
