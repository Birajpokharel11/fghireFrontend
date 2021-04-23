import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Hidden,
  IconButton,
  Typography
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {
  Overview,
  ProjectDetails,
  RightColumn,
  Table,
  SmallTable,
  IgpPaper,
  Footer
} from './components';

const useStyles = makeStyles(() => ({
  topSection: {
    marginTop: '5vh'
  },
  typography: {
    color: 'White'
  },
  button: {
    padding: '6px 12px'
  }
}));

const ProjectResult = () => {
  const classes = useStyles();

  return (
    <div>
      <IgpPaper />
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          className={classes.topSection}
        >
          <Grid item style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton component={Link} to="/searchResult">
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Go Back
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={9} lg={8}>
            <Overview />
            <Hidden smDown>
              <Table />
            </Hidden>
            <Hidden mdUp>
              <SmallTable />
            </Hidden>
            <br />
            <br />
            <ProjectDetails />
            <br />
          </Grid>

          <Grid item xs={12} md={3} lg={4}>
            <RightColumn />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default ProjectResult;
