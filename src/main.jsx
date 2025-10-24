import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "../src/Context/CarritoContext.jsx"
import App from './App.jsx'
import './Style_token.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CarritoProvider>
      <App />
    </CarritoProvider>
    </BrowserRouter>
  </StrictMode>
)
