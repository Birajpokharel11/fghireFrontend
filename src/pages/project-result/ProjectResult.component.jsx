import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { PaperContainer } from './components';

const useStyles = makeStyles(() => ({
  topSection: {
    marginTop: '5vh'
  }
}));

const ProjectResult = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.topSection}
        spacing={2}
      >
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton component={Link} to="/searchResult">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" style={{ marginLeft: 10 }}>
            Go Back
          </Typography>
        </Grid>
        <Grid item>
          <PaperContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectResult;
