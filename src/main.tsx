import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AthleteProvider } from './context/AthleteContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AthleteProvider>
      <App />
    </AthleteProvider>
  </StrictMode>
);