import React, { Fragment } from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projectLogo from '../../assets/images/logo.png';
import appleStoreImage from '../../assets/images/home/app-store.png';
import playStoreImage from '../../assets/images/home/play-store.png';

const FooterSection = () => {
  return (
    <Fragment>
      <div className="bg-footer footer-section">
        
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Container maxWidth="md">
                <div className="d-flex mb-2 justify-content-start">
                  <a href="/" className="logo">
                    <img alt="JOHNSHUB" src={projectLogo}/>
                  </a>
                </div>
                <div className="d-flex mb-2 justify-content-start">
                  <a href="/">
                    <h5 className="display-5 mb-4 text-white font-weight-normal font-italic header-johnshub-title">
                      Your first move
                    </h5>
                  </a>
                </div>
                <div className="d-flex justify-content-start">
                <Tooltip arrow title="Facebook">
                  <IconButton
                    className="nav-link text-white-50"
                    href="https:&#x2F;&#x2F;www.facebook.com&#x2F;UiFort"
                    rel="noopener nofollow"
                    target="_blank">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-xxl"
                      />
                    </span>
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Twitter">
                  <IconButton
                    className="nav-link text-white-50"
                    href="https:&#x2F;&#x2F;twitter.com&#x2F;uifort1"
                    rel="noopener nofollow"
                    target="_blank">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-xxl"
                      />
                    </span>
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Linkedin">
                  <IconButton
                    className="nav-link text-white-50"
                    href="https:&#x2F;&#x2F;www.linkedin.com&#x2F;uifort1"
                    rel="noopener nofollow"
                    target="_blank">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        className="font-size-xxl"
                      />
                    </span>
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title="Youtubu">
                  <IconButton
                    className="nav-link text-white-50"
                    href="https:&#x2F;&#x2F;youtubu.com&#x2F;uifort1"
                    rel="noopener nofollow"
                    target="_blank">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'youtube']}
                        className="font-size-xxl"
                      />
                    </span>
                  </IconButton>
                </Tooltip>
              </div>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container maxWidth="md">
                <div className="d-flex appstore">
                  <a href="#"><img className="image" src={appleStoreImage} /></a>
                  <a href="#"><img className="image" src={playStoreImage} /></a>
                </div>
                <div className="list-outer">
                  <div className="list-item">
                    <a href="#">Advertise with us</a>
                  </div>
                  <div className="list-item">
                    <a href="#">About us</a>
                  </div>
                  <div className="list-item">
                    <a href="#">Feedback</a>
                  </div>
                  <div className="list-item">
                    <a href="#">Contact us</a>
                  </div>
                </div>
                <div className="list-outer">
                  <div className="list-item">
                    <a href="#">Terms of use</a>
                  </div>
                  <div className="list-item">
                    <a href="#">Privacy</a>
                  </div>
                  <div className="list-item">
                    <a href="#">Market Data Disclaimer</a>
                  </div>
                  <div className="list-item">
                    <a href="#">&copy;2020 Johnshub</a>
                  </div>
                </div>
              </Container>
            </Grid>
          </Grid>
        
      </div>
    </Fragment>
  );
};
export default FooterSection;
