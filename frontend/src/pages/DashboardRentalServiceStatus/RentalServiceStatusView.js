import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

class DashboardRentalServiceStatus extends Component {

  UNSAFE_componentWillMount() {
    this.props.analyticsActions.getRentalAnalytics();
  }

  calculateRents = (timesPerBattery) => {
    const total = (timesPerBattery && timesPerBattery.total) || null;
    var res = 0;
    if (total && (total.length > 0)) {
      for (var i = 0; i < total.length; i++) {
        var item = total[i];
        res += item && item.rental_count;
      }
    }
    return res;
  }

  render() {
    const {
      averageDuration,
      numbersPerPlace,
      numbersPerStation,
      places,
      rentalAnalytics,
      stations,
      timesPerBattery,
      ThemeOptions,
      usagePerStationType,
      users
    } = this.props;

    const totalRents = timesPerBattery && timesPerBattery.value && this.calculateRents(timesPerBattery.value);
    const totalStations = stations && stations.value && stations.value.length;
    const totalPlaces = places && places.value && places.value.length;
    const totalUsers = users && users.value && Object.keys(users.value).length;

    return (
      <Fragment>
        <PageTitle
          titleHeading="Rental Serivce Status"
          titleDescription="This page show retal service status."
        />

        <Section1
          totalRents={totalRents}
          totalStations={totalStations}
          totalPlaces={totalPlaces}
          totalUsers={totalUsers}
        />

        <Section2 numbersPerStation={(numbersPerStation && numbersPerStation.value) || null}/>
        <Section3 numbersPerStation={(numbersPerStation && numbersPerStation.value) || null}/>

        <Section4 usagePerStationType={(usagePerStationType && usagePerStationType.value) || null} />
        <Section5 usagePerStationType={(usagePerStationType && usagePerStationType.value) || null} />
        <Section6 averageDuration={(averageDuration && averageDuration.value) || null} />

      </Fragment>
    );
  }
}

export default DashboardRentalServiceStatus;