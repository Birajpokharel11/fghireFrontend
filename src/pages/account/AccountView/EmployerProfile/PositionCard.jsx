import React from 'react';
import PropTypes from 'prop-types';
import { GoLocation as LocationIcon } from 'react-icons/go';
import { GiOfficeChair as TimeIcon } from 'react-icons/gi';
import { AiOutlineClockCircle as ClockIcon } from 'react-icons/ai';
import { Typography, Card, CardContent, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import StarsIcon from '@material-ui/icons/Stars';

const useStyles = makeStyles(() => ({
  root: {
    padding: '2% 2% 1% 4%',
    marginBottom: '2%',
    '&:hover': {
      borderLeftStyle: 'solid',
      borderLeftWidth: '4px',
      borderLeftColor: 'blue'
    }
  },
  favIcon: {
    height: 40,
    width: 40,
    '&:hover': {
      color: 'black'
    }
  },

  inline: {
    display: 'inline-block',
    marginLeft: '3%'
  }
}));
const PositionCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid container xs={6} item justify="space-around">
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                {item.name}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box py={1}>
                <LocationIcon className={classes.inline} />
                <Typography className={classes.inline}>
                  {item.location}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box py={1}>
                <TimeIcon className={classes.inline} />
                <Typography className={classes.inline}>{item.time}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box py={1}>
                <ClockIcon className={classes.inline} />
                <Typography className={classes.inline}>
                  {item.postDate}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={6} item justify="flex-end" alignItems="center">
            <StarsIcon
              fontSize="large"
              color="disabled"
              className={classes.favIcon}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PositionCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default PositionCard;
