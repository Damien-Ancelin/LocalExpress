import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import CartContextProvider from './contexts/CartContext.tsx';

import './stylesheets/main.scss';
import App from './components/App/App.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter basename="/LocalExpress">
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>,
  //</StrictMode>,
);
