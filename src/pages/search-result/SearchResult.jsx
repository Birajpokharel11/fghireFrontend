import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { TopSection, TopRight, LeftAccordion, MiddleCard } from './components';

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
      <Container>
        <Grid
          container
          item
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item lg={5}>
            <LeftAccordion />
          </Grid>
          <Grid item container direction="column" lg={7} spacing={3}>
            <Grid item>
              <TopRight />
            </Grid>
            <Grid item>
              <MiddleCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default SearchResult;
