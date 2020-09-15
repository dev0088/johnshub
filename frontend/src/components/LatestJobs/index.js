import React, { Fragment } from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
} from '@material-ui/core';
import Jobs from './Jobs';

const jobs = [
  {
    title: 'Carpenter service',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, ',
    level: '$$',
  },
  {
    title: 'Carpenter service',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, ',
    level: '$$',
  },
  {
    title: 'Carpenter service',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, ',
    level: '$$',
  }
];

const LatestJobs = () => {
  return (
    <Fragment>
      <div className="bg-white">
        <Container fixed className="bg-white text-center latestjobs-container">
          <h2 className="title text-primary font-weight-bold">
            Latest Jobs on Johnshub
          </h2>
          <Jobs jobs={jobs}/>
          <p className="see-more"><a href="/PricingPlanVendor">See more</a></p>
        </Container>
      </div>
    </Fragment>
  );
};
export default LatestJobs;
