import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root element with React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the new root.render method instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measuring performance
reportWebVitals();