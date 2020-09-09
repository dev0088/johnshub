import React, { Fragment } from 'react';
import {
  Container,
} from '@material-ui/core';

const WhatIsJohnshub = () => {
  return (
    <Fragment>
      <div className="py-4 bg-secondary">
        <Container fixed className="pb-4">
          <div className="text-center py-4">
            <h3 className="display-3 mb-2 font-weight-bold text-primary">
              What is Johnshub
            </h3>
          </div>
          <p className="text-center font-size-lg">
            Find business services by submitting what you need rather than searching, scrolling and having to make first contact. After you Submit, the business make first contact with you. Johnshub is a form-based submission website. You can submit anything you want for services. You can even submit yourself for employment opportunities. You can submit for any service you can think of from finding a lawyer to something more obscure like a private bus charter. Johnshub is a one-stop site for finding services.
          </p>
        </Container>
      </div>
    </Fragment>
  );
};
export default WhatIsJohnshub;
