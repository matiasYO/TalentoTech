import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ProductosProvider } from "./Context/ProductosContext.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";

import App from './App.jsx';
import './Style_token.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductosProvider>
          <SearchProvider>
            <CarritoProvider>
              <App />
            </CarritoProvider>
          </SearchProvider>
        </ProductosProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
