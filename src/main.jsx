import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './static/lightmode_theme.css';
import './static/darkmode_theme.css';
import './static/animation.css';
import './static/Sidebar.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
