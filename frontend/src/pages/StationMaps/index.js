import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import MapsGoogleMaps from './components/Maps/MapsGoogleMaps';
import MapsLeafletMaps from './components/Maps/MapsLeafletMaps';
export default function StationMaps() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="StationMaps"
        titleDescription="Implement in your applications Google or vector maps."
      />
      <ExampleWrapperSimple sectionHeading="Google maps">
        <MapsGoogleMaps />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Leaflet maps">
        <MapsLeafletMaps />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
