import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LengthAndPay from './LengthAndPay';

const Validation = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <fragment>
      <Grid item xs="12">
        <FormControlLabel
          control={
            <Checkbox
              disableRipple="true"
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          }
          label="Mark as Featured"
        />
        <Paper elevation={0}>
          <Typography gutterBottom="True" variant="body2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </Typography>
        </Paper>
      </Grid>
      {checked && <LengthAndPay />}
    </fragment>
  );
};
export default Validation;
