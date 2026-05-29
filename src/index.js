import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from './lib/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider><App /></RouterProvider>);
