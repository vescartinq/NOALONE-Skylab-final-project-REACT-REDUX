import React, { useState } from 'react';
import {
  BrowserRouter, Route,
} from 'react-router-dom';
import { Hidden, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import './Components/Header/Header.css';
import './Components/Footer/footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import DrawerBox from './Components/DrawerBox/DrawerBox';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DashboardScreen from './views/DashboardScreen/DashboardScreen';
import ListScreen from './views/ListScreen/ListScreen';
import DetailScreen from './views/DetailScreen/DetailScreen';
import LoginScreen from './views/LoginScreen/LoginScreen';

import theme from './themeConfig';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
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

          <Route path="/login" component={LoginScreen} />
          <Route path="/challenges/:challengeId" component={DetailScreen} />
          <Route path="/challenges" component={ListScreen} />
          <Route path="/" exact component={DashboardScreen} />

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
