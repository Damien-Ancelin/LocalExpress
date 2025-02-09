import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/LocalExpress">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
