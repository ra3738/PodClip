/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: 280,
    height: 280,
    margin: '40px',
  },
  media: {
    height: 180,
  },
});

class NowPlaying extends React.Component {
  constructor(props) {
    super(props)
    this.displayText()
  }

  displayText() {
    // const data = JSON.parse(podcast)
    console.log('Hello')
  }

  render() {
    const { classes } = this.props;
    const { history } = createHistory({ forceRefresh: true });
    return (
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardActionArea onClick={() => history.push('/card1')}>
              <CardMedia
                className={classes.media}
                image='https://blogs.ubc.ca/theedventure/files/2015/12/de1_0506.jpg'
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='h2' align='center'>
                  Card 1
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    );
  }
};

export default withStyles(useStyles)(NowPlaying);
