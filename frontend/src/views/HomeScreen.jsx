import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeConfig';

import MainContainer from '../Components/MainContainer';
import Footer from '../Components/Footer';

function HomeScreen() {
  return (

    <ThemeProvider theme={theme}>
      <MainContainer />
      <Footer />
    </ThemeProvider>

  );
}

export default HomeScreen;