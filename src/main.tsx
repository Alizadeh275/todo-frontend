import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"

import { UserProvider, DarkModeProvider } from "./shared/contexts";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </DarkModeProvider>

  </StrictMode>,
)
