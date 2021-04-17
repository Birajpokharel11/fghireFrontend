import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          inputVariant="outlined"
          fullWidth="True"
          format="MM/dd/yyyy"
          margin="dense"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
