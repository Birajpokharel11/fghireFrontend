import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import ReactCountryFlag from 'react-country-flag';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from '@material-ui/core/Avatar';
import { Container, Grid, Typography, Paper, Chip } from '@material-ui/core';
import Unnamed from './Unnamed.png';

const useStyles = makeStyles(() => ({
  paper: {
    padding: '100px',
    width: '100%'
    // background:
    //   'linear-gradient(to bottom, #123d69, #006a87, #3d9596, #88bea1, #d7e4b6)'
  },
  img: {
    height: 150,
    width: 150
  },
  salarypaper: {
    padding: '35px'
  }
}));

const IgpPaper = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Grid>
        <Paper
          variant="outlined"
          square
          elevation={3}
          className={classes.paper}
        >
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs md={3}>
                <Avatar className={classes.img} alt="Avatar" src={Unnamed} />
              </Grid>
              <Grid item xs md={9}>
                <Typography gutterBottom variant="h4">
                  Restaurant General Manager
                </Typography>
                <Typography variant="h5" gutterBottom>
                  About the Employer
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs md={3}>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs md={3}>
                    <ReactCountryFlag
                      className="emojiFlag"
                      title="United kingdom"
                      countryCode="GB"
                      svg
                      style={{
                        fontSize: '2em'
                        // lineHeight: '2em'
                      }}
                      aria-label="United kingdom"
                    />
                  </Grid>
                  <Grid item xs md={3}>
                    <Chip
                      Icon={<DoneIcon />}
                      fullWidth
                      label="Verified"
                      clickable
                      color="primary"
                    />
                  </Grid>
                  <Grid md={3} />
                  <Grid item xs>
                    <Button fullWidth variant="outlined" color="secondary">
                      $15k - 35k
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </div>
  );
};
export default IgpPaper;
