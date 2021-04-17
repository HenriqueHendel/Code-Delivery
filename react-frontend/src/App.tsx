import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';

import Mapping from './components/Mapping';
import theme from './theme';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} >
        <CssBaseline />
        <Mapping />
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
