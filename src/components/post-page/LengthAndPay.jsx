import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const LengthAndPay = () => {
  const price = 20;
  const [days, setDays] = React.useState(0);
  const amount = price * days;

  const handleDays = (event) => {
    setDays(event.target.value);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs="6" sm="4">
        <Paper elevation={0}>
          {' '}
          <Typography>
            Enter no. of days <b>($ {price} per day)</b>
          </Typography>{' '}
        </Paper>
        <Paper elevation={0}>
          <TextField
            variant="outlined"
            fullWidth="True"
            margin="dense"
            value={days}
            onChange={handleDays}
            InputProps={{
              endAdornment: <InputAdornment position="end">days</InputAdornment>
            }}
          />
        </Paper>
      </Grid>

      <Grid item xs="12">
        <Paper elevation={0}>
          <Typography>
            Total Amount: <h3>${amount}</h3>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LengthAndPay;
