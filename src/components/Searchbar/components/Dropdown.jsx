import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
});

const options = [
  { id: 1, name: 'Agency' },
  { id: 2, name: 'Freelancer' },
  { id: 1, name: 'Projects' }
];

export default function Dropdown() {
  const classes = useStyles();

  return (
    <Autocomplete
      id="job-select-demo"
      style={{ width: 250, border: 'none', borderRadius: '25px 0 0 25px' }}
      options={options}
      classes={{
        option: classes.option
      }}
      autoSelect
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          // label="Choose a job"
          style={{
            backgroundColor: '#fff',
            borderRadius: '25px 0 0 25px',
            border: 'none'
            // padding: 5
          }}
          variant="outlined"
          label=""
          // margin="normal"
        />
      )}
    />
  );
}
