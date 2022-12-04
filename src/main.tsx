import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { StylesContextProvider } from './components/contexts/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesContextProvider>
        <App />
      </StylesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
