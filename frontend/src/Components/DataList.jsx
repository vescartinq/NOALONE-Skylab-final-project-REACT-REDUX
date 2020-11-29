import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function DataList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Your Profile" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Your Challenges" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <BorderColorIcon />
          </ListItemIcon>
          <ListItemText primary="Create New Challenge" />
        </ListItem>
      </List>

      <Divider />

      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="DashBoard" />
        </ListItem>
        
        <ListItemLink href="#simple-list">
          <ListItemText primary="Donate" />
        </ListItemLink>
      </List>
    </div>
  );
}
