import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import HistoryFeedback from './HistoryFeedback';
import EmploymentHistory from './EmploymentHistory';
import RightSection from './RightSection';

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
    paddingLeft: '3%',
    marginTop: '3%'
  },
  leftSection: {
    marginTop: '3%'
  }
}));

const MiddleSection = () => {
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
          {/* <Paper elevation={0} className={classes.paper}> */}
          <Grid item xs="12">
            <Typography
              gutterBottom="True"
              variant="h4"
              className={classes.heading}
            >
              About me
            </Typography>
            {/* <Paper elevation={0} className={classes.content}> */}
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
            {/* </Paper> */}
          </Grid>
          <HistoryFeedback />
          <Grid item xs="12">
            <Pagination
              count={2}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Grid>

          <EmploymentHistory />
          {/* </Paper> */}
        </Grid>

        <Grid item xs={12} sm={12} md={4} className={classes.rightSection}>
          <RightSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MiddleSection;
