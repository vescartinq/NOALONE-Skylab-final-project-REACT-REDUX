import React, { useState } from 'react';
import {
  BrowserRouter, Route,
} from 'react-router-dom';
import { Hidden, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './Components/Header/Header';
import './Components/Header/Header.css';
import DrawerBox from './Components/DrawerBox/DrawerBox';
import Footer from './Components/Footer/Footer';
import './Components/Footer/footer.css';
import DetailScreen from './views/DetailScreen/DetailScreen';
import ListScreen from './views/ListScreen/ListScreen';
import DashboardScreen from './views/DashboardScreen/DashboardScreen';

import theme from './themeConfig';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const openAction = () => {
    setOpen(!open);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header openAction={openAction} />
          <Hidden>
            <DrawerBox
              variant="temporary"
              open={open}
              onClose={openAction}
            />
          </Hidden>
          <div className={classes.content}>
            <div className={classes.toolbar} />
          </div>
          <Route path="/challenges/:challengeId" exact component={DetailScreen} />
          <Route path="/challenges" exact component={ListScreen} />
          <Route path="/" exact component={DashboardScreen} />

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
