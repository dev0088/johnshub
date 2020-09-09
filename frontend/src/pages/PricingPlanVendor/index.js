import React, { Fragment } from 'react';
import HeaderHome from '../../components/HeaderSections/HeaderHome';
import FooterSection from '../../components/FooterSection';
import PricingVendorContent from '../../components/PricingVendorContent';
import {
  Container,
} from '@material-ui/core';

export default function PricingPlanVendor(props) {
  return (
    <Fragment>
      <HeaderHome />
      <PricingVendorContent />
      <FooterSection />
    </Fragment>
  );
}
