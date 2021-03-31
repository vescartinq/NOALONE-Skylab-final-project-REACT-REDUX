/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  List, ListItem, ListItemIcon, ListItemText, Divider, ListItemAvatar, Avatar,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import { readActiveUser } from '../../redux/actions/user-actions';

import './DataList.css';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function DataList() {
  const { user } = useSelector((store) => store.user);
  const userName = user.displayName.split(' ', 1);

  return (
    <div className="main-container">
      <ListItem alignItems="flex-start" className="user">
        <Avatar alt="user image" src={user.image} />
        <ListItemText primary={userName} />
      </ListItem>

      <Divider variant="inset" component="li" />

      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemLink href="/">
            <ListItemText primary="Perfil" />
          </ListItemLink>
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

      <ListItem button>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemLink href="/admin">
          <ListItemText primary="Tus Retos" />
        </ListItemLink>
      </ListItem>

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
