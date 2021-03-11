import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Searchbar from 'src/components/Searchbar';

const useStyles = makeStyles(() => ({
  heroContainer: {
    // backgroundImage: `url(${'static/images/banner.jpg'})`,
    backgroundColor: '#111',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    fontSize: 20,
    paddingBottom: 20
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
      justify="center"
      alignItems="center"
      className={classes.heroContainer}
    >
      <Grid item align="center">
        <Typography className={classes.mainFont}>
          The Easiest Way to{' '}
          <span style={{ color: 'rgb(3 144 255)' }}>Get Your New Job</span>
        </Typography>
        <Typography className={classes.subtitle}>
          Find Jobs, Employment & Career Opportunities
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: 60, marginBottom: 10 }}>
        <Searchbar list={list} />
      </Grid>
    </Grid>
  );
};

export default Homepage;
