import React, { Fragment } from 'react';

import {
  Grid,
  Fab,
  Container,
  InputAdornment,
  Drawer,
  IconButton,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField,
  Divider
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import imageHomeBanner from '../../assets/images/home/home-banner.png';

import HeaderHome from '../../components/HeaderSections/HeaderHome';
import ServicesImageSection from '../../components/ServicesImageSection';
import ServicesSection from '../../components/ServicesSection';
import WhatIsJohnshub from '../../components/WhatIsJohnshub';
import VideosSection from '../../components/VideosSection';
import LatestJobs from '../../components/LatestJobs';
import PricingPlansSection from '../../components/PricingPlansSection';
import LicenseSection from '../../components/LicenseSection';
import FooterSection from '../../components/FooterSection';

const LandingPage = () => {
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
  console.log('====== base URL: ', process);

  return (
    <Fragment>
      <div className="bg-white">
        <div className="hero-wrapper bg-composed-wrapper bg-white">
          <HeaderHome />
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image bg-composed-filter-rm"
              style={{ backgroundImage: 'url(' + imageHomeBanner + ')' }}
            />
            <div className="hero-banner-container bg-composed-wrapper--content">
              <Container fixed className="card-find-container">
                <Grid container spacing={4} className="d-flex align-items-center">
                  <Grid item xs={12} md={12}>
                    <Card className="card-box card-find text-center mb-4">
                      <CardContent className="p-3">
                        <h5 className="card-find-title font-weight-bold mb-3">
                          Find all service providers under the sun in no time
                        </h5>
                        <p className="card-find-sub-title text-primary font-weight-bold">
                          Don't Search. Submit.
                        </p>
                        <div id="embed_search">
                          <Grid container spacing={4}>
                            <Grid item lg={2} md={1} xs={12} />
                            <Grid item lg={6} md={8} xs={12} className="text-right">
                              <TextField
                                fullWidth
                                margin="dense"
                                variant="outlined"
                                id="search-condition"
                                className="card-find-text"
                                InputLabelProps={{
                                  className: "card-find-text-placeholder"
                                }}
                                inputProps={{
                                  className: "card-find-text-adornment"
                                }}
                                placeholder={"START A SUBMISSION"}
                              />
                            </Grid>
                            <Grid item lg={2} md={2} xs={12}>
                              <Button
                                className="card-find-button"
                                color="primary"
                                variant="contained"
                                id="mc-embedded-search-start"
                                name="search"
                                type="submit">
                                <span className="btn-wrapper--label font-weight-bold card-find-button-text">Start</span>
                              </Button>
                            </Grid>
                            <Grid item lg={2} md={1} xs={12} />
                          </Grid>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
        <ServicesImageSection />
        <ServicesSection />
        <div className="bg-gray-1000-home">
          <WhatIsJohnshub />
          <VideosSection />
        </div>
        <LatestJobs />
        <PricingPlansSection />
        <LicenseSection />
        <FooterSection />
      </div>
    </Fragment>
  );
};

export default LandingPage;
