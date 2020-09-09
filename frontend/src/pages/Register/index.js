import React, { Fragment } from 'react';
import HeaderHome from '../../components/HeaderSections/HeaderHome';
import FooterSection from '../../components/FooterSection';
import PagesRegisterContent from '../../components/PagesRegister/PagesRegisterContent';
import PagesRegisterStep2Content from '../../components/PagesRegister/PagesRegisterStep2Content';
import { signupWithAPI } from '../../services/apis/auth';

export default function PagesRegister(props) {
  const [registerStep, setRegisterStep] = React.useState(0);
  const [userValue, setUserValue] = React.useState({});

  const onRegister = (userInfo) => {
    const data = {
      username: userValue.email,
      ...userValue,
      ...userInfo
    }
    signupWithAPI(data)
    .then(res => {
      console.log('===== res: ', res, props);
      props.history.push('/Login');
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log('===== error: ', error);
      // ...
    });
  };

  const onContinue = (userValue) => {
    // props.history.push({pathname: '/RegisterCustom', state: {userInfo}});
    setUserValue({...userValue})
    setRegisterStep(1);
  }

  const onBack = () => {
    if (registerStep === 0) {
      props.history.push('/Home');
      return;
    } else if (registerStep === 1) {
      setRegisterStep(0);
    }

  }

  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <HeaderHome />
        {registerStep == 0 && <PagesRegisterContent onRegisterClick={onRegister} onClickContinue={onContinue} onClickBack={onBack}/>}
        {registerStep == 1 && <PagesRegisterStep2Content userInfo={userValue} onClickRegister={onRegister} onClickBack={onBack}/>}
      </div>
      <FooterSection />
    </Fragment>
  );
}
