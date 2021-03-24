import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import Dark from './views/Dark';
import { green, purple } from "@material-ui/core/colors";

import theme from './assets/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Dark/>
    </ThemeProvider>
  );
}

export  default App;