import React, { Fragment } from 'react';
import HeaderHome from '../../components/HeaderSections/HeaderHome';
import FooterSection from '../../components/FooterSection';
import PagesLoginContent from '../../components/PagesLogin/PagesLoginContent';
import { loginWithAPI } from '../../services/apis/auth';

export default function PagesLogin(props) {
  const onLogin = (userInfo) => {
    const data = {
      username: userInfo.email,
      email: userInfo.email,
      password: userInfo.password
    }
    loginWithAPI(data)
    .then(res => {
      console.log('===== res: ', res, props);
      props.history.push('/DashboardDefault');
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log('===== error: ', error);
      // ...
    });
  };

  return (
    <Fragment>
      <HeaderHome />
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <PagesLoginContent onLoginClick={onLogin}/>
      </div>
      <FooterSection />
    </Fragment>
  );
}
