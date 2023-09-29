import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import BhadeContext from './context/BhadeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BhadeContext>
    <App />
  </BhadeContext>,
)
