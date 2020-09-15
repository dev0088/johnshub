import React, { Fragment } from 'react';
import {
  Grid,
  Container,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PagesRegisterStep2Content = (props) => {
  const [userValue, setUserValue] = React.useState({...props.userInfo});
  const [showAlert, setShowAlert] = React.useState(false);

  const handleChangeField = (name, event) => {
    setUserValue({
      ...userValue,
      [name]: event.target.value
    } );
  }

  const handleCreateAccount = () => {
    console.log('===== this: ', userValue);
    if(userValue.password1 === userValue.password2) {
      props.onClickRegister(userValue);
      return;
    } else {
      setShowAlert(true);
    }
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  }
  
  return (
    <Fragment>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-start">
                <div className="bg-composed-wrapper--content register-section-2">
                  <Grid container spacing={0} className="min-vh-50">
                    <Grid
                      item
                      xs={12}
                      md={12}
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
                            Back to first
                          </span>
                        </Button>
                      </Container>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      className="d-flex align-items-center">
                      <Container maxWidth="sm">
                        <h3 className="display-4 font-weight-bold text-primary text-center title">
                          Finish creating your account
                        </h3>
                        <div className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Email address"
                            fullWidth
                            placeholder="Enter your email address"
                            type="email"
                            value={props.userInfo.email}
                            disabled
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Password"
                            fullWidth
                            placeholder="Enter your password"
                            type="password"
                            onChange={event => handleChangeField('password1', event)}
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Confirm password"
                            fullWidth
                            placeholder="Re-enter your password"
                            type="password"
                            onChange={event => handleChangeField('password2', event)}
                          />
                        </div>

                        <Button
                          fullWidth
                          color="primary"
                          size="large"
                          variant="contained"
                          className="mb-5"
                          onClick={handleCreateAccount}>
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
      <Dialog
        open={showAlert}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The confirm password isn't same with the password.
            Please re-enter password.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default PagesRegisterStep2Content;
