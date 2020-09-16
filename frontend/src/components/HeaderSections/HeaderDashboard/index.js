import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Container,
  Fab,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import projectLogo from '../../../assets/images/logo.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import HeaderUserbox from '../HeaderUserbox';

const HeaderDashboard = (props) => {
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <Fragment>
      <div className="header-section header-nav-wrapper header-nav-wrapper-lg w-100 px-4 navbar-dark bg-midnight-balck-900 bg-black-900">
        <div className="header-nav-logo align-items-center d-flex justify-content-start">
          <div className="nav-logo font-italic">
            <Link
              to="/"
              title="JOHNSHUB">
              <i className="bg-white header-johnshub-logo">
                <img
                  alt="JOHNSHUB"
                  src={projectLogo}
                  className="header-johnshub-logo"
                />
              </i>
              <span className="header-johnshub-title">Your first move</span>
            </Link>
          </div>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          {/* <span className="d-none d-lg-block header-service-prvide-menu">
            <a href="/PricingPlanVendor" className="btn-inverse">Are you a service provider?</a>
          </span> */}
          <span className="d-none d-lg-block header-divider" />
          <span className="d-none d-lg-block">
            <HeaderUserbox userInfo={props.userInfo}/>
          </span>
        </div>
        <Drawer
          variant="temporary"
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          elevation={11}>
          <List className="py-0">
            <ListItem className="d-block bg-secondary py-2 px-3">
              <div className="d-flex w-100 justify-content-between navbar-light align-content-center">
                <div className="header-nav-logo justify-content-start">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="navbar-brand d-flex align-items-center d-40"
                    title="Johnshub React Admin Dashboard with Material-UI PRO">
                    <img
                      alt="Johnshub React Admin Dashboard with Material-UI PRO"
                      className="d-block img-fluid"
                      src={projectLogo}
                    />
                  </a>
                </div>
                <IconButton
                  onClick={toggleDrawer('right', false)}
                  color="primary">
                  <MenuRoundedIcon />
                </IconButton>
              </div>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Link
                to="/PricingPlanVendor"
                className="d-flex px-2 align-items-center dropdown-item rounded">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-deep-blue text-center text-white d-40 rounded-circle">
                      <FontAwesomeIcon icon={['fas', 'object-group']} />
                    </div>
                  </div>
                  <div className="text-truncate max-w-70 overflow-hidden">
                    <div className="font-weight-bold text-primary d-block">
                      Are you a service provider?
                    </div>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </Link>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Link
                to="/Login"
                className="d-flex px-2 align-items-center dropdown-item rounded">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-strong-bliss text-center text-white d-40 rounded-circle">
                      <FontAwesomeIcon icon={['fas', 'sitemap']} />
                    </div>
                  </div>
                  <div className="text-truncate max-w-70 overflow-hidden">
                    <div className="font-weight-bold text-primary d-block">
                      Login
                    </div>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </Link>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Link
                to="/Register"
                className="d-flex px-2 align-items-center dropdown-item rounded">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-arielle-smile text-center text-white d-40 rounded-circle">
                      <FontAwesomeIcon icon={['fas', 'shapes']} />
                    </div>
                  </div>
                  <div className="text-truncate max-w-70 overflow-hidden">
                    <div className="font-weight-bold text-primary d-block">
                      Create free account 
                    </div>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-lg"
                    />
                  </div>
                </div>
              </Link>
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </div>
    </Fragment>
  );
};

export default HeaderDashboard;
