import React, { useState } from 'react';
import { Hidden, makeStyles } from '@material-ui/core';
import Header from './Header/Header';
import DrawerBox from './DrawerBox';

import ChallengeCard from './ChallengeCard/ChallengeCard';

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

function MainContainer(props) {
  const challenge = props;
  const classes = styles();
  const [open, setOpen] = useState(false);
  const openAction = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
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
        <ChallengeCard className="challenge-item" challenge={challenge} />
      </div>

    </div>
  );
}

export default MainContainer;
