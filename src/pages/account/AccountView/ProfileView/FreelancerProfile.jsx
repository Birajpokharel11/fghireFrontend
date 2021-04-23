import React from 'react';
import ProfilePic from 'src/icons/ProfilePic.jpg';

import { Divider } from '@material-ui/core';

import TopSection from './TopSection';
import MiddleSection from './MiddleSection';

// const profile = {
//   name: 'Linda Mcarthy',
//   skills: 'iOS Expert + Node Dev',
//   country: 'England',
//   status: true,
//   rating: 4,
//   countryIcon: 'US',
//   image: ProfilePic
// };

const FreelancerProfile = () => {
  return (
    <>
      <TopSection
        name="Linda Mcarthy"
        skills="iOS Expert + Node Dev"
        rating={5}
        country="USA"
        status="true"
        image={ProfilePic}
        countryIcon="US"
      />
      <Divider />
      <MiddleSection />
    </>
  );
};

export default FreelancerProfile;
