import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import PlacesResum from './components/Resum';
import PlacesList from './components/List';
import MapsLeafletMaps from '../StationMaps/components/Maps/MapsLeafletMaps';
import MapsMapBox from '../StationMaps/components/Maps/MapsMapBox';
import { ExampleWrapperSimple } from '../../layout-components';


class DashboardRentalServiceStatus extends Component {

  UNSAFE_componentWillMount() {
    this.props.placeActions.getPlaces();
  }

  render() {
    const {
      places,
      stations,
    } = this.props;

    const totalStations = stations && stations.value && stations.value.length;
    const totalPlaces = places && places.value && places.value.length;

    return (
      <Fragment>
        <PageTitle
          titleHeading="Places"
          titleDescription="This page show all places."
        />

        <PlacesResum
          places={(places && places.value) || null}
          stations={(stations && stations.value) || null}
        />

        <PlacesList places={(places && places.value) || null} />

        <ExampleWrapperSimple sectionHeading="Stations Map">
          <MapsMapBox places={(places && places.value) || null} />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}

export default DashboardRentalServiceStatus;