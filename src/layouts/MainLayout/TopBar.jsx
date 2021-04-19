import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography
  // Grid
} from '@material-ui/core';
// import Logo from 'src/components/Logo';

const useStyles = makeStyles({
  root: {
    borderBottom: '2px solid white'
  },
  toolbar: {
    backgroundColor: 'black',
    height: 64
  },
  logoText: {
    fontWeight: 700,
    color: '#337AB7',
    fontSize: '2em',
    '&:hover': { color: 'white' }
    // marginLeft: '0.5em'
  },
  gap: {
    flexGrow: '1'
  }
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          {/* <Grid container direction="row" justify="center" alignItems="center">
            <Grid>
              <Logo />
            </Grid>
            <Grid> */}
          <Typography variant="button" className={classes.logoText}>
            IGP
          </Typography>
          {/* </Grid>
          </Grid> */}
        </RouterLink>
        <Typography className={classes.gap}> </Typography>
        <RouterLink to="/app/dashboard">
          <Button color="primary">Dashboard</Button>
        </RouterLink>
        <RouterLink to="/post">
          <Button color="primary">Post a Job</Button>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
