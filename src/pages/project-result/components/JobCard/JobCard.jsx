import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import { Paper, Grid, Typography } from '@material-ui/core';
// import Background from './Background.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    '&:hover': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  },
  paperchild2: {
    padding: '20px 35px',
    backgroundColor: '#f9f9f9'
  },
  paperchild3: {
    backgroundColor: '#f9f9f9'
  },
  cardHeader: {
    backgroundColor: '#d9d9d9'
  }
});

function JobCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} square>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={item.avatarUrl} />}
        className={classes.cardHeader}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.subtitle}
      />
      <CardContent className={classes.paperchild3}>
        <Paper elevation={0} square className={classes.paperchild2}>
          <Paper elevation={0} square className={classes.paperchild3}>
            <Grid container direction="column">
              <Grid item style={{ display: 'flex' }}>
                <LocationOnOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  {item.location} <br />
                </Typography>
              </Grid>
              <br />
              <Grid item style={{ display: 'flex' }}>
                <WorkOutlineOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  {item.subtitle}
                  <br />
                </Typography>
              </Grid>
              <br />
              <Grid item style={{ display: 'flex' }}>
                <MonetizationOnOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  {item.money}
                  <br />
                </Typography>
              </Grid>
              <br />
              <Grid item style={{ display: 'flex' }}>
                <ScheduleOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  {item.day} <br />
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </CardContent>
    </Card>
  );
}

JobCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default JobCard;
