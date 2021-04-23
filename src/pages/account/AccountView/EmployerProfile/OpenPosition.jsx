import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Grid, Typography } from '@material-ui/core';

import PositionCard from './PositionCard';

const useStyles = makeStyles(() => ({
  heading: {
    marginTop: '2%',
    marginBottom: '2%',
    padding: '3% 3% 3% 6%',
    borderRadius: '4px',
    backgroundColor: '#f2f2f2'
  }
}));

const position = [
  {
    name: 'Python Developer',
    location: 'Berlin',
    time: 'Full Time',
    postDate: '20-04-2021'
  },
  {
    name: 'Junior Full Stack Developer',
    location: 'Berlin',
    time: 'Full Time',
    postDate: '20-04-2021'
  }
];

const OpenPosition = () => {
  const classes = useStyles();
  return (
    <Grid item xs="12">
      <Typography variant="h4" gutterBottom="True" className={classes.heading}>
        Open Positions
      </Typography>
      {position.map((item) => (
        <PositionCard item={item} />
      ))}
    </Grid>
  );
};

export default OpenPosition;
