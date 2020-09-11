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
import PricingPlansSection from '../../components/PricingPlansSection';
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
  console.log('====== base URL: ', process.env);

  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <HeaderHome />
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: 'url(' + imageHomeBanner + ')' }}
          />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <Container fixed className="pb-5">
              <Grid container spacing={4} className="d-flex align-items-center">
                <Grid item xs={12} md={12}>
                  <Card className="card-box card-find-container text-center mb-4">
                    <CardContent className="p-3">
                      <h5 className="card-title font-weight-bold display-4 mb-3">
                        Find all service providers under the sun in no time
                      </h5>
                      <p className="card-text display-3 text-primary font-weight-bold">
                        Don't Search. Submit.
                      </p>
                      <div id="embed_search">
                        <Grid container spacing={4}>
                          <Grid item lg={2} md={1} xs={12} />
                          <Grid item lg={6} md={8} xs={12}>
                            <div id="mc_embed_search_scroll">
                              <div className="mc-field-group">
                                <TextField
                                  fullWidth
                                  margin="dense"
                                  variant="outlined"
                                  id="search-condition"
                                  className="mt-0"
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <SearchIcon />
                                      </InputAdornment>
                                    )
                                  }}
                                />
                              </div>
                              <div className="clear" id="mce-responses">
                                <div
                                  className="response"
                                  id="mce-Errorresponse"
                                  style={{ display: 'none' }}
                                />
                                <div
                                  className="response"
                                  id="mce-success-response"
                                  style={{ display: 'none' }}
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                style={{ position: 'absolute', left: '-5000px' }}>
                                <input
                                  name="b_3ebc33a3d37f2278158d74721_a122e673aa"
                                  tabIndex="-1"
                                  type="text"
                                />
                              </div>
                            </div>
                          </Grid>
                          <Grid item lg={2} md={2} xs={12}>
                            <Button
                              className="w-100"
                              color="primary"
                              variant="contained"
                              id="mc-embedded-search-start"
                              name="search"
                              type="submit">
                              <span className="btn-wrapper--label font-weight-bold">Start</span>
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
      <WhatIsJohnshub />
      <VideosSection />
      <PricingPlansSection />
      <FooterSection />
    </Fragment>
  );
};

export default LandingPage;
