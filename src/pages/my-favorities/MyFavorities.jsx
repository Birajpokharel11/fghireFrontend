import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Divider } from '@material-ui/core';
import { Jobs, Freelancers } from './component';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2% '
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

export default function MediaCard() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <br />
      <br />
      <Typography variant="h3">Bookmarks</Typography>
      <br />
      <Divider />
      <br />
      <Jobs />
      <br />
      <Freelancers />
    </Container>
  );
}
