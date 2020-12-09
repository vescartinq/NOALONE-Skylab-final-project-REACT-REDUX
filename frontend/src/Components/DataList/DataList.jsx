/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@material-ui/core';
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
          <ListItemText primary="Perfil" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Tus Retos" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <BorderColorIcon />
          </ListItemIcon>
          <ListItemLink href="/create">
            <ListItemText primary="Crear Reto" />
          </ListItemLink>
        </ListItem>
      </List>

      <Divider />

      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="/">
          <ListItemText primary="Menú Principal" />
        </ListItemLink>

        <ListItemLink href="/challenges">
          <ListItemText primary="Retos Activos" />
        </ListItemLink>

        <ListItemLink href="/donate">
          <ListItemText primary="Haz una Donación" />
        </ListItemLink>
      </List>
    </div>
  );
}
