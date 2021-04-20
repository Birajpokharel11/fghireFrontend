import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Rating from '@material-ui/lab/Rating';
import { FiCalendar } from 'react-icons/fi';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Paper
} from '@material-ui/core';

const history = [
  {
    skills: 'Web, Database and API Developer',
    status: 'Rated as Freelancer',
    rating: 5,
    date: 'August 2019',
    feedback:
      'Excellent programmer - fully carried out my project in a very professional manner.'
  },
  {
    skills: 'Web, Database and API Developer',
    status: 'Rated as Freelancer',
    rating: 5,
    date: 'August 2019',
    feedback:
      'Excellent programmer - fully carried out my project in a very professional manner.'
  },
  {
    skills: 'Web, Database and API Developer',
    status: 'Rated as Freelancer',
    rating: 5,
    date: 'August 2019',
    feedback:
      'Excellent programmer - fully carried out my project in a very professional manner.'
  },
  {
    skills: 'Web, Database and API Developer',
    status: 'Rated as Freelancer',
    rating: 5,
    date: 'August 2019',
    feedback:
      'Excellent programmer - fully carried out my project in a very professional manner.'
  }
];

const useStyles = makeStyles(() => ({
  root: {
    padding: '2% 2% 2% 4%',
    marginBottom: '2%'
  },
  paper: {
    padding: '4%'
  },
  heading: {
    marginTop: '2%',
    marginBottom: '2%',
    padding: '3% 3% 3% 6%',
    borderRadius: '4px',
    backgroundColor: '#f2f2f2'
  },
  ratingMargin: {
    marginTop: '3%'
  },
  iconMargin: {
    marginTop: '2%'
  },
  inline: {
    display: 'inline-block',
    marginRight: '3%'
  }
}));

const HistoryFeedback = () => {
  const classes = useStyles();
  return (
    <fragment>
      <Grid item xs="8">
        <Typography
          variant="h4"
          gutterBottom="True"
          className={classes.heading}
        >
          Work History and Feedback
        </Typography>
        {history.map((item) => (
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} variant="h4" gutterBottom>
                {item.skills}
              </Typography>
              <Box pt={1}>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.status}
                </Typography>
              </Box>

              <Grid item container spacing={2}>
                <Grid item xs="12" sm="4" md="3">
                  <Box
                    component="fieldset"
                    mb={1}
                    borderColor="transparent"
                    className={classes.ratingMargin}
                  >
                    <Rating value={item.rating} readOnly />
                  </Box>
                </Grid>
                <Grid item xs="12" sm="8" md>
                  <Paper elevation={0} className={classes.iconMargin}>
                    <FiCalendar className={classes.inline} />
                    <Typography className={classes.inline}>
                      {item.date}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Typography variant="body2" component="p">
                {item.feedback}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </fragment>
  );
};

export default HistoryFeedback;
