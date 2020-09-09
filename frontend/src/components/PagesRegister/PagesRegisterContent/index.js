import React, { Fragment } from 'react';
import {
  Grid,
  Container,
  Button,
  TextField,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PagesRegisterContent = (props) => {
  const [userValue, setUserValue] = React.useState({});

  const handleChangeField = (name, event) => {
    setUserValue({
      ...userValue,
      [name]: event.target.value
    } );
  }

  const handleClickContinue = () => {
    props.onClickContinue(userValue);
  }

  return (
    <Fragment>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-start">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    {/* <Grid
                      item
                      xs={12}
                      className="d-flex align-items-center">
                      <Container maxWidth="sm">
                        <Button
                          size="large"
                          className="text-primary"
                          variant="outlined"
                          color="primary"
                          onClick={()=> props.onClickBack()}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'arrow-left']}
                            />
                          </span>
                          <span className="btn-wrapper--label">
                            Back to home
                          </span>
                        </Button>
                      </Container>
                    </Grid> */}
                    <Grid
                    item
                    xs={12}
                    className="d-flex align-items-center">
                      <Container maxWidth="sm">
                          <h3 className="display-4 mb-2 font-weight-bold pricing-container-title text-primary text-center">
                            Create your account
                          </h3>
                          <p className="font-size-lg mb-5 text-black-50 text-center">
                            Create your account to enjoy the benefits of johnshub customer account.
                          </p>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Email address"
                              fullWidth
                              placeholder="Enter your email address"
                              type="email"
                              // onChange={event => handleChangeEmail(event.target.value)}
                              onChange={event => handleChangeField('email', event)}
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="First name"
                              fullWidth
                              placeholder="Enter your firstname"
                              type="text"
                              onChange={event => handleChangeField('firstName', event)}
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Last name"
                              fullWidth
                              placeholder="Enter your lastname"
                              type="text"
                              onChange={event => handleChangeField('lastName', event)}
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Billing Address"
                              fullWidth
                              placeholder="Enter your billing address"
                              type="text"
                              onChange={event => handleChangeField('billingAddress', event)}
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="City"
                              fullWidth
                              placeholder="Enter your city"
                              type="text"
                              onChange={event => handleChangeField('city', event)}
                            />
                          </div>

                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Zip Code"
                              fullWidth
                              placeholder="Enter your zip code"
                              type="number"
                              onChange={event => handleChangeField('zipCode', event)}
                            />
                          </div>
                          
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              label="Phone"
                              fullWidth
                              placeholder="Enter your phone number"
                              type="tel"
                              onChange={event => handleChangeField('phoneNumber', event)}
                            />
                          </div>
                          <div className="form-group pt-2 mb-4 text-center">
                            Already have an account? <a href="/Login">Sign in</a> 
                          </div>
                          <Button
                            fullWidth
                            color="primary"
                            size="large"
                            variant="contained"
                            className="mb-5 "
                            onClick={handleClickContinue}>
                            Continue
                          </Button>
                      </Container>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PagesRegisterContent;
