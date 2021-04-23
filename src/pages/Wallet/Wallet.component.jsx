import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {
  Container,
  colors,
  Button,
  Box,
  Divider,
  Typography
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { Info } from '@material-ui/icons';
import MoneyIcon from '@material-ui/icons/Money';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import { Redemption, Credit } from './component';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '&:hover': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  },
  media: {
    height: 140
  },
  container: {
    marginTop: '2%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  paper: {
    padding: '15px'
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

export default function MediaCard() {
  const classes = useStyles();
  // const [state, setSrate] = useState()
  const content = [
    {
      title: 'Available Balance',
      Balance: '10k-15K',
      description:
        "Credits can used for making new projects on Nlance, and that can redeem anytime Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
    },
    {
      title: ' Pending Amount',
      Balance: '10k-15K',
      description:
        "It's a hold balance for future references, It can't be redeem Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      title: ' Reequest for Redeem',
      Balance: '10k-15K',
      description:
        "This is the balance which you have requested for redeem Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      title: 'Total credits',
      Balance: '10k-15K',
      description:
        "This is the credits you've got Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  ];

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {content.map((item) => (
          <Grid item md={3} xs={12}>
            <Card
              square
              className={classes.root}
              // onMouseOver={() => setState({ raised: true, shadow: 3 })}
              // onMouseOut={() => setState({ raised: false, shadow: 1 })}
              // raised={state.raised}
              // zDepth={state.shadow}
            >
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    <MoneyIcon />
                  </Avatar>
                }
                // className={classes.cardHeader}
                action={
                  <Tooltip title={item.description} placement="top">
                    <IconButton aria-label="settings">
                      <Info />
                    </IconButton>
                  </Tooltip>
                }
                title={item.title}
                subheader={item.Balance}
              />
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <Box display="flex" justifyContent="flex-end">
        <Tooltip
          title={`*Every deposit is subjected to 5% admin commission
           and every redemption is subjected to 5% admin commission`}
          placement="left"
        >
          <Button color="primary" variant="contained">
            Deposit Fund
          </Button>
        </Tooltip>
      </Box>
      <br />
      <Divider />
      <br />
      <Typography>Available Balance</Typography>
      <br />
      <Redemption />
      <br />
      <br />
      <Divider />
      <br />
      <Credit />
    </Container>
  );
}
