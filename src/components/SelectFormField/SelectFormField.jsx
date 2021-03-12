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
  return <Popper {...props} style={{ width: 235 }} placement="bottom-start" />;
};

export default function SelectFormField(props) {
  const { list } = props;

  const classes = useStyles();

  return (
    <Autocomplete
      id="job-select-demo"
      style={{ width: 245 }}
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
          // InputLabelProps={{ shrink: false }}
          variant="outlined"
          label="Sort By: "
          // margin="normal"
        />
      )}
    />
  );
}

SelectFormField.propTypes = {
  list: PropTypes.array
};
