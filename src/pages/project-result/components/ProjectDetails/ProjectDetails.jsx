import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Divider, Grid } from '@material-ui/core';

import JobCard from '../JobCard';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  jobcard: {
    '&:hover': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  const content = [
    {
      title: 'Keurig K-Duo',
      subtitle: 'Full stack',
      location: 'San Francisco',
      time: 'Full Time',
      money: '10k-15K',
      day: '4 days ago',
      avatarUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg'
    },
    {
      title: ' Mark diaz',
      subtitle: 'Front End',
      location: 'San Francisco',
      time: 'Full Time',
      money: '10k-15K',
      day: '4 days ago',
      avatarUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg'
    },
    {
      title: 'Municoh pedro',
      subtitle: 'Backend nodejs',
      location: 'San Francisco',
      time: 'Full Time',
      money: '20k-35K',
      day: '1 days ago',
      avatarUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg'
    },
    {
      title: 'Max Hollaway',
      subtitle: 'Barista and cashier',
      location: 'San Francisco',
      time: 'Full Time',
      money: '10k-15K',
      day: '2 days ago',
      avatarUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg'
    }
  ];
  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <Typography paragraph style={{ fontWeight: 600 }}>
          <Link to="/projectResult">About</Link>
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography paragraph style={{ fontWeight: 600 }}>
          Job Description
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Typography>
        <br />
        <Divider />
        <br />
        <Grid item style={{ display: 'flex' }}>
          <Typography paragraph style={{ fontWeight: 600 }}>
            Skills Required
          </Typography>
          <Typography variant="h6" style={{ marginLeft: 76 }}>
            <Button to="/projectResult" variant="outlined" color="primary">
              PHP
            </Button>
            <Button to="/projectResult" variant="outlined" color="primary">
              PHP
            </Button>
          </Typography>
        </Grid>
        <Typography paragraph style={{ fontWeight: 600 }}>
          Similar Jobs
        </Typography>
        <Grid container spacing={4}>
          {content.map((item) => (
            <Grid item md={6}>
              <JobCard item={item} />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
      </CardContent>
    </Card>
  );
}
