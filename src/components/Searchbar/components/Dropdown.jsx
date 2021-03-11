import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Popper } from '@material-ui/core';
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

const PopperMy = (props) => {
  return (
    <Popper
      {...props}
      style={{ width: 235, marginTop: 10 }}
      placement="bottom-start"
    />
  );
};

export default function Dropdown(props) {
  const { list } = props;

  const classes = useStyles();

  return (
    <Autocomplete
      id="job-select-demo"
      style={{ width: 250, border: 'none', borderRadius: '25px 0 0 25px' }}
      options={list}
      classes={{
        option: classes.option
      }}
      autoHighlight
      PopperComponent={PopperMy}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          // label="Choose a job"
          style={{
            backgroundColor: '#fff',
            borderRadius: '25px 0 0 25px',
            padding: '7px 5px 0px 15px'
          }}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
          InputLabelProps={{ shrink: false }}
          // variant="outlined"
          label=""
          // margin="normal"
        />
      )}
    />
  );
}

Dropdown.propTypes = {
  list: PropTypes.array
};
