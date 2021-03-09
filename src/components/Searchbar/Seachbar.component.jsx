import React from 'react';
import {
  Paper,
  // TextField,
  InputBase,
  Divider,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import SearchBar from 'material-ui-search-bar';

import SearchIcon from '@material-ui/icons/Search';
import { Dropdown } from './components';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    // padding: '2px 4px',
    display: 'flex',
    width: '100%',
    padding: '2px 4px',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    borderRadius: '0 25px 25px 0'
    // width: 400
  },
  root: {
    display: 'flex',
    width: '50vw'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    backgroundColor: '#fff'
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const Seachbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1} style={{ borderRadius: '25px 0 0 25px' }}>
        <Dropdown />
      </Paper>
      {/* <Paper style={{ marginLeft: 5 }}>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          fullWidth
          style={{ backgroundColor: '#fff', borderRadius: '25px 0 0 25px' }}
        />
      </Paper> */}
      {/* <SearchBar
        // onRequestSearch={appStore.fetchBeers}
        style={{ marginLeft: 5 }}
        placeholder="Find here..."
        autoFocus
      /> */}
      <Paper elevation={1} className={classes.searchContainer}>
        <InputBase
          className={classes.input}
          placeholder="Find Here"
          inputProps={{ 'aria-label': 'find here' }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Seachbar;
