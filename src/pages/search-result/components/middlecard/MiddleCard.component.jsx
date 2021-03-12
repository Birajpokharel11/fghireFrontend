import React from 'react';
import { Grid } from '@material-ui/core';
import { CardContainer } from 'src/components';

const skills = [
  { id: '1', name: 'Javascript' },
  { id: '2', name: 'React JS' },
  { id: '3', name: 'Node JS' },
  { id: '4', name: 'AWS' }
];

const MiddleCard = () => {
  return (
    <Grid item container direction="column" spacing={3}>
      <Grid item>
        <CardContainer skills={skills} title="Full Stack Developer" />
      </Grid>
      <Grid item>
        <CardContainer skills={skills} title="Front End Developer" />
      </Grid>
      <Grid item>
        <CardContainer skills={skills} title="Backend Developer" />
      </Grid>
    </Grid>
  );
};

export default MiddleCard;
