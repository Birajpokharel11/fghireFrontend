import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Hidden } from '@material-ui/core';
import {
  TopSection,
  TopRight,
  LeftAccordion,
  MiddleCard,
  TitleBar
} from './components';

const useStyles = makeStyles(() => ({
  topSection: {
    height: '30vh',
    // backgroundColor: '#111',
    backgroundImage:
      'linear-gradient(to bottom, #123d69, #006a87, #3d9596, #88bea1, #d7e4b6)',
    marginBottom: '8vh'
  }
}));

const SearchResult = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Hidden mdDown>
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
      </Hidden>

      <Hidden lgUp>
        <Grid container item direction="column">
          <Grid item>
            <TitleBar />
          </Grid>
        </Grid>
      </Hidden>

      <Container>
        <Grid
          container
          item
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Hidden mdDown>
            <Grid item lg={5}>
              <LeftAccordion />
            </Grid>
          </Hidden>
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
