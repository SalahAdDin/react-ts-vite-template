import './index.css';

import App from '@presentation/pages/App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

reportWebVitals(console.log);
