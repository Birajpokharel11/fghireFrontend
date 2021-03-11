import React from 'react';
import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

import Searchbar from 'src/components/Searchbar';

// const useStyles = makeStyles(() => ({
//   heroContainer: {
//     // backgroundImage: `url(${'static/images/banner.jpg'})`,
//     backgroundColor: '#111',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100%',
//     height: '15em'
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   }
// }));

const list = [
  { id: 1, name: 'Graphic Designer' },
  { id: 2, name: 'Sale & Marketing' },
  { id: 3, name: 'Social Media' },
  { id: 4, name: 'Software & Mobile' },
  { id: 5, name: 'Video, Photo & Audio' },
  { id: 6, name: 'Web Developers Test' }
];

const TopSection = () => {
  // const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      // className={classes.heroContainer}
    >
      <Grid item>
        <Searchbar list={list} />
      </Grid>
    </Grid>
  );
};

export default TopSection;
