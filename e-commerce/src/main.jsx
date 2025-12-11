import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter'
import ContextProvider from './context/ContextProvider'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <AppRouter/>
  </ContextProvider>
)
