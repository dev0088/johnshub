import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import StationsResum from './components/Resum';
import StationsList from './components/List';
import MapsMapBox from '../StationMaps/components/Maps/MapsMapBox';
import { ExampleWrapperSimple } from '../../layout-components';


class DashboardRentalServiceStatus extends Component {

  UNSAFE_componentWillMount() {
    this.props.stationActions.getStations();
    this.props.placeActions.getPlaces();
  }

  onRefreshStation = () => {
    this.props.stationActions.refreshStations();
  };

  render() {
    const {
      places,
      stations,
    } = this.props;

    return (
      <Fragment>
        <PageTitle
          titleHeading="Stations"
          titleDescription="This page show all stations."
        />

        <StationsResum
          places={(places && places.value) || null}
          stations={(stations && stations.value) || null}
        />

        <StationsList
          stations={(stations && stations.value) || null}
          places={(places && places.value) || null}
          onRefresh={this.onRefreshStation}
          isRefreshing={stations.isFetching}
        />

        <ExampleWrapperSimple sectionHeading="Stations Map">
          <MapsMapBox places={(places && places.value) || null} />
        </ExampleWrapperSimple>
      </Fragment>
    );
  }
}

export default DashboardRentalServiceStatus;