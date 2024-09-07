import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './components/App/App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <HashRouter basename='/'>
    <StrictMode>
      <App />
    </StrictMode>,
  </HashRouter>
)
