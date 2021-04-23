import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import FeedbackCard from './FeedbackCard';

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
  heading: {
    marginTop: '2%',
    marginBottom: '2%',
    padding: '3% 3% 3% 6%',
    borderRadius: '4px',
    backgroundColor: '#f2f2f2'
  }
}));

const HistoryFeedback = () => {
  const classes = useStyles();
  return (
    <Grid item xs="12">
      <Typography variant="h4" gutterBottom="True" className={classes.heading}>
        Work History and Feedback
      </Typography>
      {history.map((item) => (
        <FeedbackCard item={item} />
      ))}
    </Grid>
  );
};

export default HistoryFeedback;
