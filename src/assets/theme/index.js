import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { purple, green } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
      primary:   purple[500],
      secondary: green[500]
    },
});

export default theme;