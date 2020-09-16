import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '@material-ui/styles';
import { ClipLoader } from 'react-spinners';
import MuiTheme from './theme';
import {
  PresentationLayout
} from './layout-blueprints';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const RecoverPassword = lazy(() => import('./pages/RecoverPassword'));
const Profile = lazy(() => import('./pages/Profile'));
const PricingPlanVendor = lazy(() => import('./pages/PricingPlanVendor'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  const SuspenseLoading = () => {
    return (
      <Fragment>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            <ClipLoader color={'var(--primary)'} loading={true} />
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            {/* <Redirect exact from="/" to="/" /> */}

            <Route path={[
              '/',
              '/Home', 
              '/Login',
              '/Register',
              '/RecoverPassword',
              '/PricingPlanVendor',
              '/Dashboard'
              ]}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route exact path="/" component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route
                      path="/RecoverPassword"
                      component={RecoverPassword}
                    />
                    <Route
                      path="/PricingPlanVendor"
                      component={PricingPlanVendor}
                    />
                    <Route
                      path="/Dashboard"
                      component={Dashboard}
                    />
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
