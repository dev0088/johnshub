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

const LivePreviewExample = () => {
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
      <div className="header-nav-wrapper header-nav-wrapper-lg w-100 px-4 navbar-dark bg-midnight-bloom">
        <Container className="d-flex" fixed>
          <div className="header-nav-logo align-items-center d-flex justify-content-start">
            <div className="nav-logo">
              <Link
                to="/Home"
                title="JOHNSHUB">
                <i className="bg-white">
                  <img
                    alt="JOHNSHUB"
                    src={projectLogo}
                  />
                </i>
                <span>Your first move</span>
              </Link>
            </div>
          </div>
          <div className="header-nav-menu d-none d-lg-block">
            <div className="d-flex justify-content-center text-white">
              <Button
                color="inherit"
                className="btn-inverse px-3 mx-1 py-2 text-capitalize"
                component={Link}
                to="/DashboardDefault">
                Dashboards
              </Button>
              <Button
                color="inherit"
                className="btn-inverse px-3 mx-1 py-2 text-capitalize"
                component={Link}
                to="/ApplicationsChat">
                App
              </Button>
              <Button
                color="inherit"
                className="btn-inverse px-3 mx-1 py-2 text-capitalize"
                component={Link}
                to="/RegularTables2">
                Tables
              </Button>
              <Button
                color="inherit"
                className="btn-inverse px-3 mx-1 py-2 text-capitalize"
                component={Link}
                to="/FormsWizard">
                Forms
              </Button>
              <Button
                color="inherit"
                className="btn-inverse px-3 mx-1 py-2 text-capitalize"
                component={Link}
                to="/PricingPlanVendor">
                Are you service provider?
              </Button>
            </div>
          </div>
          <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
            <span className="d-none d-lg-block">
              <Button
                component={Link}
                to="/Login"
                className="px-3"
                color="primary"
                variant="contained">
                Login
              </Button>
            </span>
            <span className="d-none d-lg-block btn-wrapper--label">
              <Button
                component={Link}
                to="/Register"
                className="px-3 bg-happy-green"
                // color="primary"
                variant="contained">
                Get Free Account
              </Button>
            </span>
            <span className="d-block d-lg-none">
              <Fab
                onClick={toggleDrawer('right', true)}
                color="secondary"
                size="medium">
                <MenuRoundedIcon />
              </Fab>
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
                      title="Carolina React Admin Dashboard with Material-UI PRO">
                      <img
                        alt="Carolina React Admin Dashboard with Material-UI PRO"
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
                  to="/DashboardDefault"
                  className="d-flex px-2 align-items-center dropdown-item rounded">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-deep-blue text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'object-group']} />
                      </div>
                    </div>
                    <div className="text-truncate max-w-70 overflow-hidden">
                      <div className="font-weight-bold text-primary d-block">
                        Dashboards
                      </div>
                      <span className="text-black-50">
                        12 different dashboards to choose from
                      </span>
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
                  to="/ApplicationsChat"
                  className="d-flex px-2 align-items-center dropdown-item rounded">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-strong-bliss text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'sitemap']} />
                      </div>
                    </div>
                    <div className="text-truncate max-w-70 overflow-hidden">
                      <div className="font-weight-bold text-primary d-block">
                        Apps
                      </div>
                      <span className="text-black-50">
                        Multiple application designs included
                      </span>
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
                  to="/Cards3"
                  className="d-flex px-2 align-items-center dropdown-item rounded">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-arielle-smile text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'shapes']} />
                      </div>
                    </div>
                    <div className="text-truncate max-w-70 overflow-hidden">
                      <div className="font-weight-bold text-primary d-block">
                        Cards
                      </div>
                      <span className="text-black-50">
                        Over 300 different cards available
                      </span>
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
                  to="/RegularTables"
                  className="d-flex px-2 align-items-center dropdown-item rounded">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-happy-green text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'table']} />
                      </div>
                    </div>
                    <div className="text-truncate max-w-70 overflow-hidden">
                      <div className="font-weight-bold text-primary d-block">
                        Tables
                      </div>
                      <span className="text-black-50">
                        Multiple, easy to customise tables
                      </span>
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
                  to="/FormsWizard"
                  className="d-flex px-2 align-items-center dropdown-item rounded">
                  <div className="align-box-row w-100">
                    <div className="mr-3">
                      <div className="bg-skim-blue text-center text-white d-40 rounded-circle">
                        <FontAwesomeIcon icon={['fas', 'align-center']} />
                      </div>
                    </div>
                    <div className="text-truncate max-w-70 overflow-hidden">
                      <div className="font-weight-bold text-primary d-block">
                        Forms
                      </div>
                      <span className="text-black-50">
                        Over 50 forms elements included
                      </span>
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
                <Button
                  href="/DashboardDefault"
                  className="text-white w-100"
                  variant="contained"
                  color="secondary">
                  View Live Demo
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Container>
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
