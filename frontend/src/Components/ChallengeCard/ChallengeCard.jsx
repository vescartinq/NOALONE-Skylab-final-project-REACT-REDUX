import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './ChallengeCard.css';
import { Button } from '@material-ui/core';
import CardBoxInfo from '../CardBoxInfo/CardBoxInfo';
import Map from '../Map/Map';
import credentials from '../../Private/credential';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: grey[200] },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ChallengeCard({ challenge }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="card-item">
        <Card className={classes.root}>
          <CardHeader
            avatar={(
              <Avatar aria-label="recipe" className={classes.avatar}>
                C
              </Avatar>
        )}
            action={(
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
        )}
            title={challenge.title}
            subheader={challenge.date}
          />
          <CardContent className="card-info_section">
            <CardMedia
              id="card-info_image"
              alt="item image"
              className={classes.media}
              image={challenge.image}
              title={challenge.category}
            />
            <CardBoxInfo challenge={challenge} />
          </CardContent>
          <CardContent className="card-mini-and-donate">
            <Typography variant="body2" color="textSecondary" component="p">
              {challenge.miniDescription}
            </Typography>
            <Button size="large" type="button" variant="contained" color="primary" fullWidth>DONATE</Button>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {' '}
                <b>Objetivo del Challenge</b>
                {' '}
              </Typography>
              <Typography paragraph>
                {challenge.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Map
                googleMapURL={mapURL}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                loadingElement={<p>Cargando...</p>}
                challenge={challenge}
              />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
