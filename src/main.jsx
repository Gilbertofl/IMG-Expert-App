import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IMGExpertApp } from './IMGExpertApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IMGExpertApp />
  </StrictMode>,
)
