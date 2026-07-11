import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// NOTE: HashRouter (instead of BrowserRouter) is used here because
// GitHub Pages is a static file host with no server-side rewrite rules.
// With BrowserRouter, refreshing or directly opening a route like
// /food-listing would 404. HashRouter keeps routes after a "#"
// (e.g. yoursite.github.io/zerobite/#/food-listing), which always
// resolves to index.html, so routing works reliably on GitHub Pages.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
