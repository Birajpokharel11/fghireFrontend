import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '2%'
  }
}));

export default function PlaceBid() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Yes');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} elvation={3}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Paper elevation={0}>
              <Typography variant="h4" gutterBottom="True">
                Amount
              </Typography>
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                placeholder="Amount in USD"
                type="number"
                fullWidth
              />
            </Paper>
          </Grid>

          <Grid item>
            <Paper elevation={0}>
              <Typography variant="h4" gutterBottom="True">
                Time to Complete{' '}
              </Typography>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                placeholder="Estimated Time in Days"
                type="number"
                fullWidth
              />
            </Paper>
          </Grid>
          <Grid item xs="12">
            <FormControl component="fieldset">
              <FormLabel component="legend">Escrow Required?</FormLabel>
              <RadioGroup
                aria-label="gender"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs="6">
              <Button variant="contained" color="primary" fullWidth="True">
                Place Bid
              </Button>
            </Grid>
            <Grid item xs="6">
              <Button variant="contained" color="primary" fullWidth="True">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
