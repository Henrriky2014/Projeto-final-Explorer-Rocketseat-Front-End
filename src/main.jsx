import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { CustomerHome } from './pages/CustomerHome';
import { AdminHome } from './pages/AdminHome';
import { CustomerMenu } from './pages/CustomerMenu';
import { Signin } from './pages/Signin';
import { AdminMenu } from './pages/AdminMenu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CustomerMenu />
    </ThemeProvider>
  </React.StrictMode>,
)
