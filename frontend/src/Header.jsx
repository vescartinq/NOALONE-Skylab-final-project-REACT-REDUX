import React,{Fragment} from 'react';
import {AppBar,Toolbar, Typography,Button,makeStyles,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles=makeStyles((theme)=>({
  offset: theme.mixins.toolbar,
  menuButton:{
    marginRight:theme.spacing(2)
  },
  title:{
    flexGrow:1
  }
}))

function Header(){
  const classes= useStyles()
  return (
    <Fragment> 
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton 
              color='inherit'
              arial-label="menu"
              className={classes.menuButton}
              >
              <MenuIcon/>
            </IconButton>
            <IconButton color='inherit' >
              <div>
                <img src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd4196bb5e92529d09cb2/ac996a4073e723f5585ccadc0ab58085/Logo_transparente1.png" height="100em" width="300em"></img>
              </div>
            </IconButton>
            <Typography variant="h1" color="initial" className={classes.title}></Typography>
            <Button variant="text" color="inherit" >
              LOGIN
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
    </Fragment>
  );
}

export default Header;