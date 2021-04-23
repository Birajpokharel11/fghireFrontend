import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Container, Button } from '@material-ui/core';
// import Pagination from '@material-ui/lab/Pagination';
import CompanyReview from './CompanyReview';
import EmployerRight from './EmployerRight';
import OpenPosition from './OpenPosition';

const useStyles = makeStyles(() => ({
  paper: {
    padding: '4%',
    marginTop: '3%'
  },
  heading: {
    padding: '0 2% 2% 0'
    // marginTop: '5%'
  },
  content: {
    paddingBottom: '3%'
  },
  rightSection: {
    paddingLeft: '3%'
    // marginTop: '3%'
  },
  leftSection: {
    marginTop: '3%'
  }
}));

const EmployerMidSec = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container className={classes.leftSection}>
        <Grid
          container
          item
          direction="column"
          xs={12}
          sm={12}
          md={8}
          spacing={2}
        >
          <Grid item xs="12">
            <Typography
              gutterBottom="True"
              variant="h4"
              className={classes.heading}
            >
              About Company
            </Typography>
            <Typography variant="subtitle1" gutterBottom="True">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment. Capitalize on low hanging
              fruit to identify a ballpark value added activity to beta test.
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
            </Typography>
          </Grid>
          <OpenPosition />

          {/* <Grid item xs="12">
            <Pagination
              count={2}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Grid> */}

          <CompanyReview />
          <Grid item xs="12">
            <Button variant="contained" color="primary" size="medium">
              Leave a Review
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={4} className={classes.rightSection}>
          <EmployerRight />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployerMidSec;
