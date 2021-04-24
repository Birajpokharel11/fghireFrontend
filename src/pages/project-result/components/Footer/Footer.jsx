import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    backgroundColor: 'black'
  },
  text: {
    color: '#c0c0c0',
    padding: '15px 0px'
  },
  logoText: {
    fontWeight: 700,
    color: '#337AB7',
    fontSize: '2em',
    '&:hover': { color: 'white' }
    // marginLeft: '0.5em'
  },
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  divider: {
    backgroundColor: 'White'
  },
  grid: {
    padding: '0px 15px'
  },
  griditem: {
    marginTop: '45px'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid style={{ color: 'White' }}>
        <Paper
          variant="outlined"
          square
          elevation={0}
          className={classes.paper}
        >
          <Container maxWidth="md" className={classes.text}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <Typography variant="button" className={classes.logoText}>
                  IGP
                </Typography>
              </Grid>
              <Grid md={4} xs={12} />
              <Grid item md={4} xs={12}>
                <Paper square elevation={0} className={classes.paper}>
                  <IconButton>
                    <FacebookIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <LinkedInIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon color="primary" />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Divider variant="middle" className={classes.divider} />
          <Container maxWidth="md" style={{ padding: '30px 0px' }}>
            <Grid container style={{ color: 'White' }}>
              <Grid item xs={12} md={4} className={classes.grid}>
                <Grid direction="column" container spacing={3}>
                  <Grid item className={classes.griditem}>
                    <Typography> About</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Contact Us</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Privacy Policy</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4} className={classes.grid}>
                <Grid direction="column" container spacing={3} C>
                  <Grid item className={classes.griditem}>
                    <Typography>Account</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>LogIn</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>My Account</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4} className={classes.grid}>
                <Grid direction="column" container spacing={3} C>
                  <Grid item className={classes.griditem}>
                    <Typography>Homepage</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Terms and condition</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Privacy Policy</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Divider variant="middle" className={classes.divider} />
          <Grid container spacing={3}>
            <Grid item className={classes.footer} xs={12}>
              <Paper className={classes.paper} square>
                <Typography className={classes.text}>
                  ©2019 IGP. All Rights Reserved.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
export default Footer;
