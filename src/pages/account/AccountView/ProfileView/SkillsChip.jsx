import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none'
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function SkillsChip() {
  const classes = useStyles();
  const chipData = [
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' }
  ];

  return (
    <>
      <Typography variant="h4">Skills </Typography>
      {/* <Paper className={classes.root}> */}
      <Box my={2} className={classes.root}>
        {chipData.map((data) => {
          return (
            <li key={data.key}>
              <Chip
                size="medium"
                variant="outlined"
                color="primary"
                label={data.label}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Box>
    </>
  );
}
