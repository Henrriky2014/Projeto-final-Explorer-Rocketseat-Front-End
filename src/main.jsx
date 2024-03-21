import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { CustomerHome } from './pages/CustomerHome'
import { AdminHome } from './pages/AdminHome'
import { CustomerMenu } from './pages/CustomerMenu'
import { Signin } from './pages/Signin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CustomerHome />
    </ThemeProvider>
  </React.StrictMode>,
)
