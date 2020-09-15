import React, { Fragment } from 'react';
import {
  Container,
} from '@material-ui/core';
import Plans from '../PricingPlansSection/Plans';
import ProPricingPlansSection from '../ProPricingPlansSection';

const PricingVendorContent = () => {
  return (
    <Fragment>
      <div className="bg-white pricing-vender-section">
        <div className="py-4 pricing-page-heading">
          <Container fixed className="pb-4 text-center">
            <h2 className="title text-white">
              Service Provider Pricing Plans
            </h2>
          </Container>
        </div>
        <div className="hero-wrapper bg-composed-wrapper">
          <Container fixed className="pb-4">
            <Plans />
            <ProPricingPlansSection />
          </Container>  
        </div>
      </div>
    </Fragment>
  );
};
export default PricingVendorContent;
