import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReactGA from "react-ga4"; // 1. Import GA

// 2. Initialize with your Measurement ID
ReactGA.initialize("G-YYZ4R6S00S");

// 3. Send the initial pageview
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)