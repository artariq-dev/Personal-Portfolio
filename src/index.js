import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Take full control of scroll restoration — the browser can't reliably
// restore position with HashRouter since it treats #/ as an anchor.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HashRouter><App /></HashRouter>);
