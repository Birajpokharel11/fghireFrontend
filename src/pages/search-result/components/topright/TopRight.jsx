import React from 'react';
// import PropTypes from 'prop-types';
import {
  Grid
  //   Paper,
  //   TextField,
  //   InputBase,
  //   Divider,
  //   IconButton
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import SearchFormField from 'src/components/SearchFormField';
import SelectFormField from 'src/components/SelectFormField';

// const useStyles = makeStyles(() => ({
//   root: {
//   },
// }));

const TopRight = () => {
  // const classes = useStyles();
  return (
    <>
      <Grid item lg={5}>
        <SearchFormField />
      </Grid>
      <Grid item lg={5}>
        <SelectFormField />
      </Grid>
    </>
  );
};

// TopRight.propTypes = {
//   list: PropTypes.array
// };

export default TopRight;
