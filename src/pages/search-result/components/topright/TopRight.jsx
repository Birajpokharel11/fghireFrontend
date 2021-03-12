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

const list = [
  { id: 1, name: 'Relevance' },
  { id: 2, name: 'Newest First' }
];

const TopRight = () => {
  // const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item lg={7}>
        <SearchFormField />
      </Grid>
      <Grid item lg={5} align="right">
        <SelectFormField list={list} />
      </Grid>
    </Grid>
  );
};

// TopRight.propTypes = {
//   list: PropTypes.array
// };

export default TopRight;
