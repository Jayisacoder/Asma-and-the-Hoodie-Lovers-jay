// Entry point for the React app - this is where everything starts
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './weather.css' // Our custom styles
import App from './App.jsx'

// Mount the React app to the 'root' div in index.html
// StrictMode helps catch bugs during development by running some checks twice
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
