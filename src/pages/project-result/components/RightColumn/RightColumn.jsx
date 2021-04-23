import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Typography,
  InputBase,
  IconButton,
  Divider,
  Tooltip
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '6px 12px'
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: '100%',
    '&:hover': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  paper: {
    padding: '10px'
  },
  paperchild1: {
    padding: '20px 35px',
    backgroundColor: '#d9d9d9',
    '&:hover': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  },
  paperchild2: {
    padding: '35px',
    backgroundColor: ' #f2f2f2',
    '&:hover': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  },
  paperchild3: {
    backgroundColor: ' #f2f2f2'
  }
}));

const RightColumn = () => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0} square className={classes.paper}>
        <Button
          startIcon={<SendIcon />}
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
        >
          Place Bid
        </Button>
        <br />
        <br />
        <Paper elevation={0} square className={classes.paperchild1}>
          <Typography>Job Summary</Typography>
        </Paper>
        <Paper elevation={0} square className={classes.paperchild2}>
          <Paper elevation={0} square className={classes.paperchild3}>
            <Grid container direction="column">
              <Grid item style={{ display: 'flex' }}>
                <LocationOnOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  Location <br /> London, United Kingdom
                </Typography>
              </Grid>
              <br />
              <Grid item style={{ display: 'flex' }}>
                <WorkOutlineOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  Job Type <br /> Full Time
                </Typography>
              </Grid>
              <br />
              <Grid item style={{ display: 'flex' }}>
                <MonetizationOnOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  Salary <br />
                  Salary
                </Typography>
              </Grid>
              <br />
              <Grid item style={{ display: 'flex' }}>
                <ScheduleOutlinedIcon color="primary" />
                <Typography style={{ marginLeft: '10px' }}>
                  Date Posted <br /> Date Posted
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
        <br />
        <Paper elevation={0} square style={{ margin: '0px 0px 20px' }}>
          <Typography variant="h5">Bookmark or Share</Typography>
        </Paper>
        <Tooltip title="Save as BookMark">
          <Button
            style={{ margin: '0px 0px 25px' }}
            startIcon={<StarBorderOutlinedIcon />}
            color="primary"
            variant="contained"
          >
            BookMark
          </Button>
        </Tooltip>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            value="http://localhost:3000/projectResult"
            placeholder="http://localhost:3000/projectResult"
            inputProps={{ 'aria-label': 'http://localhost:3000/projectResult' }}
          />

          <Divider className={classes.divider} orientation="vertical" />
          <Tooltip title="copy to clipboard">
            <IconButton color="primary" className={classes.iconButton}>
              <FileCopyOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </Paper>
    </>
  );
};

export default RightColumn;
