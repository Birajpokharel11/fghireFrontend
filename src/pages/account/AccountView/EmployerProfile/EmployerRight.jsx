import React from 'react';
import { Grid, Typography, Tooltip } from '@material-ui/core';
import { ImGithub as GithubIcon } from 'react-icons/im';
import { FaTwitter as TwitterIcon } from 'react-icons/fa';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  map: {
    border: 'none',
    height: 300,
    width: '100%',
    marginTop: '6%',
    marginBottom: '15%'
  },
  icon: {
    height: 45,
    width: 45,
    paddingRight: '5%',
    marginTop: '4%',
    marginRight: '4%'
  },
  gridMargin: {
    // marginTop: '3%'
  }
}));

const EmployerRight = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="column">
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom="True">
          Location
        </Typography>
        <iframe
          className={classes.map}
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d22788.47322671708!2d-119.80505757949201!3d36.736978698923984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8095ce27467ae327%3A0x6906c5e1c4d1575d!2sCalifornia%2C%20United%20States!3m2!1d37.3000318!2d-119.23207839999999!5e0!3m2!1sen!2snp!4v1619152800855!5m2!1sen!2snp"
          loading="lazy"
          title="Location"
        />
      </Grid>
      <Grid item xs="12">
        <Typography variant="h4" className={classes.gridMargin}>
          Social Profiles
        </Typography>
        <Tooltip title="GitHub" placement="top" arrow>
          <GithubIcon className={classes.icon} />
        </Tooltip>
        <Tooltip title="Twitter" placement="top" arrow>
          <TwitterIcon className={classes.icon} />
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default EmployerRight;
