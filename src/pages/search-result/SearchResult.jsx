import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { TopSection } from './components';
import TopRight from './components/topright/TopRight';

const useStyles = makeStyles(() => ({
  topSection: {
    height: '30vh',
    backgroundColor: '#111',
    marginBottom: '8vh'
  }
}));

const SearchResult = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        container
        item
        direction="column"
        justify="center"
        className={classes.topSection}
      >
        <Grid item>
          <TopSection />
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid item lg={5}>
          left content
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <TopRight />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchResult;
