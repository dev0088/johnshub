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
      <div className="bg-gray-1000-home pricing-plan">
        <Container fixed className="text-center">
          <h2 className="container-title text-primary">
            Pricing Plans
          </h2>
          <Plans />
          <p className="pricing-plan-description">Are you a service provider? please see <a href="/PricingPlanVendor">vendor pricing</a> here for details on businesses to appear on johnshub.</p>
        </Container>
      </div>
    </Fragment>
  );
};
export default PricingPlansSection;
