import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/Themes/default'
import GlobalStyle from './Styles/global';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes/router';

import { ProductsProvider } from './Hooks/ProductsData';
import { UserProvider } from './Hooks/UserData';
import { CartProvider } from './Hooks/Cart';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <BrowserRouter>
          <CartProvider>
            <UserProvider>
              <ProductsProvider>
                <Router />
              </ProductsProvider>
            </UserProvider>
          </CartProvider>
        </BrowserRouter>  
    </ThemeProvider> 
  </React.StrictMode>,
)
