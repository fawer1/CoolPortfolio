import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ConsulinkPage from './consulinkPage'

const rootEl = document.getElementById('root')
if (rootEl) {
    createRoot(rootEl).render(
        <StrictMode>
            <ConsulinkPage />
        </StrictMode>,
    )
}
