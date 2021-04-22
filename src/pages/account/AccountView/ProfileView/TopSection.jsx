import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Avatar, Grid, Typography, ButtonBase, Box } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import Rating from '@material-ui/lab/Rating';
import ProfilePic from 'src/icons/ProfilePic.jpg';
import ReactCountryFlag from 'react-country-flag';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      'linear-gradient(to bottom, #123d69, #006a87, #3d9596, #88bea1, #d7e4b6)',
    padding: '2%'
  },

  image: {
    height: 130,
    width: 130,
    [theme.breakpoints.down('md')]: {
      height: 110,
      width: 110
    },
    [theme.breakpoints.down('sm')]: {
      height: 90,
      width: 90
    },
    [theme.breakpoints.down('xs')]: {
      height: 70,
      width: 70
    }
  },
  iconMargin: {
    display: 'inline-block',
    paddingLeft: '1em'
  },
  card: {
    // padding: '2%',
    // borderStyle: 'solid',
    // padding: 'auto',
    // marginLeft: '20%',
    paddingTop: '2%'
  },
  top: {
    marginTop: '2%',
    marginBottom: '2%'
  }
}));

const TopSection = () => {
  const classes = useStyles();
  const profile = {
    name: 'Linda Mcarthy',
    skills: 'iOS Expert + Node Dev',
    country: 'England',
    status: true,
    rating: 4,
    countryIcon: 'US'
  };
  return (
    // <Paper elevation={0} className={classes.root}>
    <Grid container spacing={3} direction="row" className={classes.top}>
      <Grid item container xs={3} sm={3} direction="row" justify="flex-end">
        <ButtonBase>
          <Avatar className={classes.image} alt="Remy Sharp" src={ProfilePic} />
        </ButtonBase>
      </Grid>

      <Grid item container xs={9} sm={8}>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h3">
              {profile.name}
            </Typography>
            <Typography variant="h4">{profile.skills}</Typography>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={profile.rating} readOnly />
              </Box>
            </Grid>
            <Grid item>
              <ReactCountryFlag
                countryCode={profile.countryIcon}
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em'
                }}
                title={profile.countryIcon}
              />
              <Typography className={classes.iconMargin} variant="h5">
                {profile.country}
              </Typography>
            </Grid>
            {profile.status && (
              <Grid item>
                <VerifiedUserIcon />
                <Typography variant="h5" className={classes.iconMargin}>
                  Verified
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </Paper>
  );
};

export default TopSection;
