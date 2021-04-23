import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import FeedbackCard from '../ProfileView/FeedbackCard';

const review = [
  {
    skills: 'Doing things the right way',
    status: 'Anonymous Employee',
    rating: 5,
    date: 'August 2019',
    feedback:
      'Great company and especially ideal for the career-minded individual. The company is large enough to offer a variety of jobs in all kinds of interesting locations. Even if you never change roles, your job changes and evolves as the company grows, keeping things fresh.'
  },
  {
    skills: 'Outstanding Work Environment',
    status: 'Anonymous Employee',
    rating: 5,
    date: 'August 2019',
    feedback:
      'They do business with integrity and rational thinking. Overall, its an excellent place to work, with products that are winning in the marketplace.'
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
      {review.map((item) => (
        <FeedbackCard item={item} />
      ))}
    </Grid>
  );
};

export default HistoryFeedback;
