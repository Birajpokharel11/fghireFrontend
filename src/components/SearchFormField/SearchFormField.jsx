import React from 'react';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    // padding: '2px 4px',
    display: 'flex',
    width: '100%',
    padding: '2px 4px',
    alignItems: 'center',
    borderRadius: '0 25px 25px 0',
    height: 56
    // width: 400
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

const SeachFormField = () => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.searchContainer}>
      <InputBase
        className={classes.input}
        placeholder="Search Here"
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
  );
};

export default SeachFormField;
