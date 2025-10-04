import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"

import { UserProvider } from "./shared/hooks/userContext.tsx";
import { DarkModeProvider } from "./shared/contexts/DarkModeContext";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </DarkModeProvider>

  </StrictMode>,
)
