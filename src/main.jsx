import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { CarProvider } from './context/CarContext.jsx';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <CarProvider>
      <App />
      </CarProvider>
    </BrowserRouter>
 
);
