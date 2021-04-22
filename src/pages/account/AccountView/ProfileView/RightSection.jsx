import React from 'react';
import { Grid } from '@material-ui/core';

import RightOffer from './RightOffer';

const RightSection = () => {
  return (
    <Grid item container xs="12" direction="column" spacing={3}>
      <RightOffer />
    </Grid>
  );
};

export default RightSection;
