import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderHome from '../../components/HeaderSections/HeaderHome';
import FooterSection from '../../components/FooterSection';
import PagesLoginContent from '../../components/PagesLogin/PagesLoginContent';
import { loginWithAPI } from '../../services/apis/auth';
import { UserActions } from '../../actions';

const LoginPage = (props) => {
  const onLogin = (userInfo) => {
    const data = {
      username: userInfo.email,
      email: userInfo.email,
      password: userInfo.password
    }
    console.log('===== baseURL: ', process.env.REACT_APP_API_BASE_URL);
    
    loginWithAPI(data)
    .then(res => {
      console.log('===== res: ', res, props);
      props.userActions && props.userActions.setUser(res);
      props.history.push('/Dashboard');
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

const mapStateToProps = state => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(UserActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
