import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  Container,
  Avatar,
  Grid,
  Typography,
  ButtonBase,
  Box,
  Paper
} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import Rating from '@material-ui/lab/Rating';
import ProfilePic from 'src/icons/ProfilePic.jpg';
import ReactCountryFlag from 'react-country-flag';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage:
      'linear-gradient(to bottom, #123d69, #006a87, #3d9596, #88bea1, #d7e4b6)',
    padding: '2%'
  },

  image: {
    height: 150,
    width: 150
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
    <Paper elevation={0} className={classes.root}>
      <Container maxWidth="lg" className={classes.card}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs="2">
            <ButtonBase className={classes.image}>
              <Avatar
                className={classes.image}
                alt="Remy Sharp"
                src={ProfilePic}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={9} sm container>
            <Grid item xs container direction="column" spacing={5}>
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  {profile.name}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {profile.skills}
                </Typography>
              </Grid>
              <Grid item container spacing={5}>
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
      </Container>
    </Paper>
  );
};

export default TopSection;
