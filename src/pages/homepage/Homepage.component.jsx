import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Searchbar from 'src/components/Searchbar';

const useStyles = makeStyles(() => ({
  heroContainer: {
    // backgroundImage: `url(${'static/images/banner.jpg'})`,
    // backgroundColor: '#111',
    backgroundImage:
      'linear-gradient(to bottom, #123d69, #006a87, #3d9596, #88bea1, #d7e4b6)',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
  },
  mainFont: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 20
    // paddingBottom: 20
  }
}));

const list = [
  { id: 1, name: 'Agency' },
  { id: 2, name: 'Freelancer' },
  { id: 1, name: 'Projects' }
];

const Homepage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      className={classes.heroContainer}
    >
      <Grid item align="center">
        <Typography className={classes.mainFont}>
          The Easiest Way to{' '}
          <span style={{ color: '#50a5ff' }}>Get Your New Job</span>
        </Typography>
        <Typography className={classes.subtitle}>
          Find Jobs, Employment & Career Opportunities
        </Typography>
      </Grid>
      <Grid item style={{ marginBottom: '12em' }}>
        <Searchbar list={list} />
      </Grid>
    </Grid>
  );
};

export default Homepage;
