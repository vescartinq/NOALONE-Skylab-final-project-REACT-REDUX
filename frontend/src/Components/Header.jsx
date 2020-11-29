import React,{Fragment} from 'react';
import {AppBar,Toolbar, Typography,Button,makeStyles,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyle=makeStyles(theme=>({
  offset: theme.mixins.toolbar,
  menuButton:{
    marginRight:theme.spacing(2),
  },
  title:{
    flexGrow:1
  },

}))

const Header=(props)=>{
  const classes= useStyle()
  
  return (

        <AppBar className={classes.appbar}>
          <Toolbar>
            <IconButton 
              color='inherit'
              arial-label="menu"
              className={classes.menuButton}
              onClick={()=>props.openAction()}
              >
              <MenuIcon/>
            </IconButton>
            <IconButton color='inherit' >
              {/* <div>
                <img src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd4196bb5e92529d09cb2/ac996a4073e723f5585ccadc0ab58085/Logo_transparente1.png" height="100em" width="300em"></img>
              </div> */}
              NoAlone
            </IconButton>
            <Typography variant="h1" color="initial" className={classes.title}></Typography>
            <Button variant="text" color="inherit" >
              LOGIN
            </Button>
          </Toolbar>
        </AppBar>
  );
}

export default Header;