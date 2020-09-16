import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import HeaderDashboard from '../../components/HeaderSections/HeaderDashboard';
import FooterSection from '../../components/FooterSection';

const DashboardPage = (props) => { 
  const userInfo = props.userInfo;
  console.log('==== userInfo: ', userInfo, props);
  // if (!userInfo.value) {
  //   props.history.push('/');
  //   return;
  // }
  
  return (
    <Fragment>
      <div className="bg-white">
        <div className="hero-wrapper bg-composed-wrapper bg-white">
          <HeaderDashboard userInfo={userInfo} />
        </div>
        <div className="dashboard">
          <p className="title">Welcome to logged in!</p>
        </div>
        <FooterSection />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps)(DashboardPage);
