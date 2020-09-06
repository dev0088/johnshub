import React, { Fragment, Component } from 'react';

import { PageTitle } from '../../layout-components';

import Section1 from './components/Section1';
import Section2 from './components/Section2';
import { ExampleWrapperSimple } from '../../layout-components';


class DashboardRentalServiceStatus extends Component {

  UNSAFE_componentWillMount() {
    this.props.userActions.getUsers();
  }

  render() {
    const { users } = this.props;
    const totalUsers = users && users.value && Object.keys(users.value).length;

    const getUsersByTypes = (users) => {
      var totalUsers = 0;
      var totalPhoneUsers = 0;
      var totalFacebookUsers = 0;
      var totalAppleUsers = 0;
      if (users) {
        for (let [key, value] of Object.entries(users)) {
          totalUsers ++;
          const provider = (value.providerData && value.providerData[0] && value.providerData[0])
            ? value.providerData[0].providerId 
            : null;
          if (provider === 'apple.com') totalAppleUsers ++;
          else if (provider === 'facebook.com') totalFacebookUsers ++;
          else totalPhoneUsers ++;
        }
      }
      return { totalUsers, totalPhoneUsers, totalFacebookUsers, totalAppleUsers };
    };

    const { totalPhoneUsers, totalFacebookUsers, totalAppleUsers } = getUsersByTypes(users && users.value);

    console.log('===== totalUsers: ', totalUsers);

    return (
      <Fragment>
        <PageTitle
          titleHeading="Users"
          titleDescription="This page show all users registered in our service."
        />

        <Section1
          totalUsers={totalUsers}
          totalPhoneUsers={totalPhoneUsers}
          totalFacebookUsers={totalFacebookUsers}
          totalAppleUsers={totalAppleUsers}
        />

        <Section2
          totalUsers={totalUsers}
          users={users && users.value}
        />

        {/* <ExampleWrapperSimple sectionHeading="Stations Map">
          <MapsMapBox places={(places && places.value) || null} />
        </ExampleWrapperSimple> */}
      </Fragment>
    );
  }
}

export default DashboardRentalServiceStatus;