import React, { Fragment } from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
} from '@material-ui/core';
import Plans from './Plans';

const PricingPlansSection = () => {
  return (
    <Fragment>
      <div className="py-4 bg-white">
        <Container fixed className="pb-4 text-center">
          <h2 className="pricing-container-title text-primary">
            Pricing Plans
          </h2>
          <Plans />
          <p className="font-size-lg">Are you a service provider? please see <a href="/PricingPlanVendor">vendor pricing</a> here for details on businesses to appear on johnshub.</p>
        </Container>
      </div>
    </Fragment>
  );
};
export default PricingPlansSection;
