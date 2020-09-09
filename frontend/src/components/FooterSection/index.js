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
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

const FooterSection = () => {
  return (
    <Fragment>
      <div className="bg-first py-5">
        <div>
          <Container maxWidth="md" className="text-center">
            <h1 className="display-3 mb-4 text-white font-weight-bold">
              Stay up to date
            </h1>
            <p className="font-size-lg text-white-50">
              Follow us on any of our social media accounts to find out when we
              release new products or updates.
            </p>
          </Container>
          <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-1 mx-auto mb-4 mt-5 w-50" />
          <div className="d-flex justify-content-center">
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
            <Tooltip arrow title="Instagram">
              <IconButton
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;www.instagram.com&#x2F;uifort1"
                rel="noopener nofollow"
                target="_blank">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Discord">
              <IconButton
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;discord.gg&#x2F;mddFBQX"
                rel="noopener nofollow"
                target="_blank">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'discord']}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Dribbble">
              <IconButton
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;dribbble.com&#x2F;UiFort"
                rel="noopener nofollow"
                target="_blank">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'dribbble']}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Github">
              <IconButton
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;github.com&#x2F;uifort"
                rel="noopener nofollow"
                target="_blank">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="font-size-xxl"
                  />
                </span>
              </IconButton>
            </Tooltip>
          </div>
          <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-1 mx-auto my-4 w-50" />
          <div className="mt-5">
            <span className="text-center d-block text-white-50">
              Copyright &copy; 2020 -{' '}
              <a
                className="text-white"
                href="https://uifort.com"
                title="UiFort">
                Johnshub
              </a>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FooterSection;
