import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../style sheets/index.css'
import '../style sheets/homePage.css'
import App from '../components/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
