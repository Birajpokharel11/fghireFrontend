import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { FiCalendar } from 'react-icons/fi';
import { HiOutlineOfficeBuilding as CompanyIcon } from 'react-icons/hi';
import { Grid, Typography, Card, CardContent, Box } from '@material-ui/core';

const employment = [
  {
    position: 'Web, Database and API Developer',
    company: 'Amazon',
    date: 'August 2014-Present',
    task:
      'Focus the team on the tasks at hand or the internal and external customer requirements.'
  },
  {
    position: 'Web, Database and API Developer',
    company: 'Amazon',
    date: 'August 2014-Present',
    task:
      'Focus the team on the tasks at hand or the internal and external customer requirements.'
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

const EmploymentHistory = () => {
  const classes = useStyles();
  return (
    <Grid item xs="8">
      <Typography variant="h4" gutterBottom="True" className={classes.heading}>
        Employment History
      </Typography>
      {employment.map((item) => (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h4" gutterBottom>
              {item.position}
            </Typography>
            <Box py={1}>
              <CompanyIcon className={classes.inline} />
              <Typography className={classes.inline}>{item.company}</Typography>
            </Box>

            <Box py={1}>
              <FiCalendar className={classes.inline} />
              <Typography className={classes.inline}>{item.date}</Typography>
            </Box>

            <Box pt={1}>
              <Typography variant="body2">{item.task}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default EmploymentHistory;
