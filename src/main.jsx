import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import { ProviderContextCartShop } from './context/cardShop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ProviderContextCartShop>
      <NavBar />
    <App />
    </ProviderContextCartShop>
  </React.StrictMode>,
)
