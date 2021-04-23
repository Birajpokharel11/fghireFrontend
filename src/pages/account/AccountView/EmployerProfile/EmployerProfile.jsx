import React from 'react';
import ProfilePic from 'src/icons/ProfilePic.jpg';
import { Divider } from '@material-ui/core';

import TopSection from '../ProfileView/TopSection';
import EmployerMidSec from './EmployerMidSec';

const EmployerProfile = () => {
  // const company = {
  //   name: 'Acodia',
  //   type: 'Software House',
  //   rating: 4,
  //   country: 'USA',
  //   status: 'true',
  //   image: ProfilePic,
  //   countryIcon: 'US'
  // };
  return (
    <>
      <TopSection
        name="Acodia"
        type="Software House"
        rating={4}
        country="USA"
        status="true"
        image={ProfilePic}
        countryIcon="US"
      />
      <Divider />
      <EmployerMidSec />
    </>
  );
};

export default EmployerProfile;
