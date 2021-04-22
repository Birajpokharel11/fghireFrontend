import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  attachment: {
    borderRadius: '6px 0px 6px 6px',
    padding: '15%'
  }
}));

const Attachments = ({ file }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.attachment}>
      <Typography gutterBottom variant="body2">
        {file.name}
      </Typography>
      <Typography variant="overline">{file.type}</Typography>
    </Paper>
  );
};

Attachments.propTypes = {
  file: PropTypes.object.isRequired
};

export default Attachments;
