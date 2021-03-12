import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import SearchFormField from 'src/components/SearchFormField';
import { AccordionContainer } from './components';

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    padding: '10px 10px 5px 10px'
  }
}));

export default function LeftAccordion() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h5">Filter Freelancers By</Typography>
        </Grid>
        <Grid item>
          <SearchFormField />
        </Grid>
        <Grid item>
          <AccordionContainer label="Job Categories" />
          <AccordionContainer label="Job Tags" />
          <AccordionContainer label="Job Types" />
          <AccordionContainer label="Job Locations" />
          <AccordionContainer label="Experience Level" />
        </Grid>
      </Grid>
    </Paper>
  );
}
