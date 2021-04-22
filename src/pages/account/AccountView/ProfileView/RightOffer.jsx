import React from 'react';
import {
  Grid,
  Button,
  LinearProgress,
  Typography,
  Tooltip,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ImGithub as GithubIcon } from 'react-icons/im';
import { FaTwitter as TwitterIcon } from 'react-icons/fa';
import { RiBookmark3Line as BookmarkIcon } from 'react-icons/ri';
import SkillsChip from './SkillsChip';
import Attachments from './Attachments';

const jobInfo = {
  rate: 35,
  jobDone: 53,
  rehire: 22,
  jobSuccess: 88,
  recommmendation: 100,
  onTime: 90,
  onBudget: 80
};

const attachments = [
  {
    name: 'Contract',
    type: 'PDF'
  },
  {
    name: 'Cover Letter',
    type: 'DOCX'
  }
];

const useStyles = makeStyles(() => ({
  button: {
    padding: '4%',
    backgroundColor: '#3f51b5',
    color: 'white'
  },
  list: {
    display: 'inline-block',
    padding: '0 3% 0% 5%',
    listStyleType: 'none'
  },
  icon: {
    height: 45,
    width: 45,
    paddingRight: '5%',
    marginTop: '4%',
    marginRight: '4%'
  }
}));

const RightOffer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <ul className={classes.list}>
          <li>
            <h3>${jobInfo.rate}</h3>
          </li>
          <li>Hourly Rate</li>
        </ul>
        {/* <Divider orientation="vertical" /> */}
        <ul className={classes.list}>
          <li>
            <h3>{jobInfo.jobDone}</h3>
          </li>
          <li>Jobs Done</li>
        </ul>
        {/* <Divider orientation="vertical" /> */}
        <ul className={classes.list}>
          <li>
            <h3>{jobInfo.rehire}</h3>
          </li>
          <li>Rehired</li>
        </ul>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth="True"
          disableRipple
          className={classes.button}
        >
          Make an Offer
        </Button>
      </Grid>
      {/* //progress bars */}
      <Grid item container xs="12" justify="center" spacing={4}>
        <Grid item xs="6">
          <Typography gutterBottom variant="h5">
            {jobInfo.jobSuccess}%
          </Typography>
          <LinearProgress variant="determinate" value={jobInfo.jobSuccess} />
          <Typography variant="subtitle1">Job Success</Typography>
        </Grid>
        <Grid item xs="6">
          <Typography gutterBottom variant="h5">
            {jobInfo.recommmendation}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={jobInfo.recommmendation}
          />
          <Typography gutterBottom variant="subtitle1">
            Recommendation
          </Typography>
        </Grid>
        <Grid item xs="6">
          <Typography gutterBottom variant="h5">
            {jobInfo.onTime}%
          </Typography>
          <LinearProgress variant="determinate" value={jobInfo.onTime} />
          <Typography variant="subtitle1">On Time</Typography>
        </Grid>

        <Grid item xs="6">
          <Typography gutterBottom variant="h5">
            {jobInfo.onBudget}%
          </Typography>
          <LinearProgress variant="determinate" value={jobInfo.onBudget} />
          <Typography variant="subtitle1">On Budget</Typography>
        </Grid>
      </Grid>

      {/* Social profiles************************************ */}

      <Grid item xs="12">
        <Typography variant="h4">Social Profiles</Typography>
        <Tooltip title="GitHub" placement="top" arrow>
          <GithubIcon className={classes.icon} />
        </Tooltip>
        <Tooltip title="Twitter" placement="top" arrow>
          <TwitterIcon className={classes.icon} />
        </Tooltip>
      </Grid>

      {/* skills******************************************* */}
      <Grid item xs="12">
        <SkillsChip />
      </Grid>
      <Grid item container xs="12" spacing={2}>
        <Grid item xs="12">
          <Typography gutterBottom variant="h4">
            Attachments
          </Typography>
        </Grid>
        {attachments.map((file) => (
          <Grid item xs="6">
            <Attachments file={file} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs="12">
        <Typography gutterBottom variant="h4">
          Bookmark or Share
        </Typography>
        <Box my={3}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BookmarkIcon />}
          >
            Bookmark
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default RightOffer;
