import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Catch unhandled errors gracefully in sandboxed iframe environments
window.addEventListener('error', (event) => {
  console.warn('Captured window error:', event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.warn('Captured unhandled promise rejection:', event.reason);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
