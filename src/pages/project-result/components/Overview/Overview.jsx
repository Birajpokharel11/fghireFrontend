import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Grid, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Overview() {
  return (
    <div>
      <Grid container spacing={2} style={{ marginBottom: '15px' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Lecture 2
              </Typography>
              <Typography variant="body2" gutterBottom>
                Front End Developers
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Experience Level: EntryLevel
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5">$19.00</Typography>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Open
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <br />
    </div>
  );
}
