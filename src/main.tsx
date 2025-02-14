import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { store } from './store/store.ts';

import './stylesheets/main.scss';
import { StrictMode } from 'react';
import App from './components/App/App.tsx';

// ! A rajouter pour gh-pages
// ? <BrowserRouter basename="/LocalExpress">

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </StrictMode>,
);
