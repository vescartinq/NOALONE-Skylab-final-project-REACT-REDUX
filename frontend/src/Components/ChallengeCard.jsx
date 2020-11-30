import React from 'react';
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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './ChallengeCard.css';
import { Button } from '@material-ui/core';
import data from '../data';
import CardBoxInfo from './CardBoxInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
  },
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

export default function CallengeCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
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
          title={data.challenges[0].title}
          subheader={data.challenges[0].date}
        />
        <CardContent className="card-info_section">
          <CardMedia
            id="card-info_image"
            className={classes.media}
            image={data.challenges[0].image}
            title={data.challenges[0].category}
          />
          <CardBoxInfo />
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.challenges[0].miniDescription}
          </Typography>

        </CardContent>
        <CardContent>
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
              <hr />
              {' '}
              <b>Objetivo del Challenge</b>
              {' '}
            </Typography>
            <Typography paragraph>
              {data.challenges[0].description}
            </Typography>
          </CardContent>
          <CardContent>
            GOOGLE MAPS (INSERT HERE)
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
