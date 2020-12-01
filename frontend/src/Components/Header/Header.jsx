import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, makeStyles, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Header.css';

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const Header = (props) => {
  const classes = useStyle();

  return (

    <AppBar className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          arial-label="menu"
          className={classes.menuButton}
          onClick={() => props.openAction()}
        >
          <MenuIcon />
        </IconButton>
        <IconButton className="logo-btn" color="inherit">
          <Link to="/">
            <div>
              <img src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd4196bb5e92529d09cb2/ac996a4073e723f5585ccadc0ab58085/Logo_transparente1.png" height="75px" width="200px" alt="logo" />
            </div>
          </Link>
        </IconButton>

        <Typography variant="h1" color="initial" className={classes.title} />
        <Button variant="text" color="inherit">
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
