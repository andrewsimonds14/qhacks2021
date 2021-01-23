import React from 'react';
import RouterApp from './router/router';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './themes';
const App = (props) => {

  const theme = getTheme();

	return (
    <ThemeProvider theme={theme}>
      <RouterApp />
  </ThemeProvider>
	);
};

export default App;
